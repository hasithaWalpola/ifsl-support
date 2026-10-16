const { DatabaseSync } = require("node:sqlite");
const { mkdirSync, writeFileSync } = require("node:fs");
const path = require("node:path");

const dataDirectory = process.env.DATA_DIR
  ? path.resolve(process.env.DATA_DIR)
  : path.join(__dirname, "data");
const exportDirectory = path.join(dataDirectory, "exports");
const exportPath = path.join(exportDirectory, "feedback.csv");
const databasePath = path.join(dataDirectory, "ifsls.sqlite");

function csvField(value) {
  const text = String(value ?? "");
  const spreadsheetSafe = /^[\t\r\n ]*[=+\-@]/.test(text) ? `'${text}` : text;
  return `"${spreadsheetSafe.replace(/"/g, '""')}"`;
}

const database = new DatabaseSync(databasePath, { readOnly: true });
const submissions = database.prepare(
  "SELECT id, created_at, name, email, category, message FROM feedback ORDER BY created_at DESC, id DESC",
).all();
database.close();

const columns = ["id", "created_at", "name", "email", "category", "message"];
const lines = [
  columns.map(csvField).join(","),
  ...submissions.map((submission) => columns.map((column) => csvField(submission[column])).join(",")),
];

mkdirSync(exportDirectory, { recursive: true });
writeFileSync(exportPath, `\uFEFF${lines.join("\r\n")}\r\n`, "utf8");
console.log(`Exported ${submissions.length} support submission(s) to ${exportPath}`);