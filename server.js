const { createServer } = require("node:http");
const { mkdirSync, readFileSync } = require("node:fs");
const path = require("node:path");
const { DatabaseSync } = require("node:sqlite");

const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 4173);
const dataDirectory = process.env.DATA_DIR
  ? path.resolve(process.env.DATA_DIR)
  : path.join(__dirname, "data");
const databasePath = path.join(dataDirectory, "ifsls.sqlite");
const maximumRequestBytes = 8 * 1024;
const supportedLanguages = new Set(["en", "si", "ta"]);
const usageEventTypes = new Set(["guide_opened", "language_changed", "pdf_created", "email_template_copy", "file_renamed"]);
const feedbackCategories = new Set(["application", "documents", "feedback"]);
const documentTypes = new Set([
  "application",
  "application-1",
  "nic",
  "al",
  "ol",
  "school-leaving",
  "birth",
  "appeal",
  "bridging",
  "request",
]);

mkdirSync(dataDirectory, { recursive: true });

const database = new DatabaseSync(databasePath);
database.exec(`
  PRAGMA journal_mode = WAL;
  CREATE TABLE IF NOT EXISTS usage_events (
    id INTEGER PRIMARY KEY,
    event_type TEXT NOT NULL,
    language TEXT NOT NULL,
    document_type TEXT,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE INDEX IF NOT EXISTS usage_events_created_at ON usage_events(created_at);
  CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'application',
    message TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);
const feedbackColumns = database.prepare("PRAGMA table_info(feedback)").all();
if (!feedbackColumns.some((column) => column.name === "category")) {
  database.exec("ALTER TABLE feedback ADD COLUMN category TEXT NOT NULL DEFAULT 'application'");
}
database.prepare("DELETE FROM usage_events WHERE created_at < datetime('now', '-90 days')").run();

const saveUsage = database.prepare(
  "INSERT INTO usage_events (event_type, language, document_type) VALUES (?, ?, ?)",
);
const saveFeedback = database.prepare(
  "INSERT INTO feedback (name, email, category, message) VALUES (?, ?, ?, ?)",
);

const staticFiles = new Map([
  ["/", ["index.html", "text/html; charset=utf-8"]],
  ["/index.html", ["index.html", "text/html; charset=utf-8"]],
  ["/styles.css", ["styles.css", "text/css; charset=utf-8"]],
  ["/app.js", ["app.js", "text/javascript; charset=utf-8"]],
  ["/logo.svg", ["logo.svg", "image/svg+xml"]],
  ["/vendor/jspdf.umd.min.js", ["vendor/jspdf.umd.min.js", "text/javascript; charset=utf-8"]],
]);

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(JSON.stringify(body));
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let byteCount = 0;
    let bodyTooLarge = false;
    const chunks = [];

    request.on("data", (chunk) => {
      byteCount += chunk.length;
      if (byteCount > maximumRequestBytes) {
        bodyTooLarge = true;
        return;
      }
      chunks.push(chunk);
    });

    request.on("end", () => {
      if (bodyTooLarge) {
        const error = new Error("Request body is too large.");
        error.statusCode = 413;
        reject(error);
        return;
      }

      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
      } catch {
        const error = new Error("Request body must be valid JSON.");
        error.statusCode = 400;
        reject(error);
      }
    });

    request.on("error", reject);
  });
}

async function handleApi(request, response, pathname) {
  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed." });
    return;
  }

  if (!request.headers["content-type"]?.startsWith("application/json")) {
    sendJson(response, 415, { error: "Send JSON data." });
    return;
  }

  const origin = request.headers.origin;
  if (origin && new URL(origin).host !== request.headers.host) {
    sendJson(response, 403, { error: "Cross-origin requests are not accepted." });
    return;
  }

  let body;
  try {
    body = await readJsonBody(request);
  } catch (error) {
    sendJson(response, error.statusCode || 400, { error: error.message });
    return;
  }

  if (pathname === "/api/usage") {
    const eventType = body.event;
    const language = supportedLanguages.has(body.language) ? body.language : "en";
    const documentType = documentTypes.has(body.documentType) ? body.documentType : null;

    if (!usageEventTypes.has(eventType) || (eventType === "pdf_created" && !documentType)) {
      sendJson(response, 400, { error: "Usage event is not recognized." });
      return;
    }

    saveUsage.run(eventType, language, documentType);
    sendJson(response, 201, { ok: true });
    return;
  }

  if (pathname === "/api/feedback") {
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const category = typeof body.category === "string" ? body.category : "";
    const message = typeof body.feedback === "string" ? body.feedback.trim() : "";
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (name.length < 1 || name.length > 100) {
      sendJson(response, 400, { error: "Enter a name up to 100 characters." });
      return;
    }
    if (!validEmail || email.length > 254) {
      sendJson(response, 400, { error: "Enter a valid email address." });
      return;
    }
    if (!feedbackCategories.has(category)) {
      sendJson(response, 400, { error: "Choose a support topic." });
      return;
    }
    if (message.length < 5 || message.length > 2000) {
      sendJson(response, 400, { error: "Feedback must be between 5 and 2000 characters." });
      return;
    }

    saveFeedback.run(name, email, category, message);
    sendJson(response, 201, { ok: true });
    return;
  }

  sendJson(response, 404, { error: "API route not found." });
}

const server = createServer(async (request, response) => {
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("Referrer-Policy", "same-origin");
  response.setHeader("X-Frame-Options", "DENY");

  let pathname;
  try {
    pathname = new URL(request.url, `http://${request.headers.host || "localhost"}`).pathname;
  } catch {
    sendJson(response, 400, { error: "Invalid request URL." });
    return;
  }

  if (pathname.startsWith("/api/")) {
    await handleApi(request, response, pathname);
    return;
  }

  const staticFile = staticFiles.get(pathname);
  if (!staticFile || !["GET", "HEAD"].includes(request.method)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found.");
    return;
  }

  const [relativePath, contentType] = staticFile;
  const content = readFileSync(path.join(__dirname, relativePath));
  response.writeHead(200, {
    "Cache-Control": "no-cache",
    "Content-Length": content.length,
    "Content-Type": contentType,
  });
  response.end(request.method === "HEAD" ? undefined : content);
});

server.listen(port, host, () => {
  console.log(`IFSLS student guide: http://${host}:${port}`);
  console.log(`SQLite database: ${databasePath}`);
});

function shutdown() {
  server.close(() => {
    database.close();
    process.exit(0);
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);