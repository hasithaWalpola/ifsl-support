const FEEDBACK_TOPICS = new Set(["application", "documents", "feedback"]);
const USAGE_EVENTS = new Set([
  "guide_opened",
  "language_changed",
  "pdf_created",
  "email_template_copy",
  "file_renamed",
]);
const LANGUAGES = new Set(["en", "si", "ta"]);
const DOCUMENT_TYPES = new Set([
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

function doPost(event) {
  const parameters = event && event.parameter ? event.parameter : {};
  if (parameters.website) return textResponse_("ok");

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) return textResponse_("busy");

  try {
    if (parameters.type === "feedback") {
      saveFeedback_(parameters);
      return textResponse_("ok");
    }
    if (parameters.type === "usage") {
      saveUsage_(parameters);
      return textResponse_("ok");
    }
    return textResponse_("invalid");
  } finally {
    lock.releaseLock();
  }
}

function saveFeedback_(parameters) {
  const name = cleanText_(parameters.name, 100);
  const email = cleanText_(parameters.email, 254);
  const category = String(parameters.category || "");
  const message = cleanText_(parameters.feedback, 2000);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !validEmail || !FEEDBACK_TOPICS.has(category) || message.length < 5) {
    throw new Error("Invalid support form submission.");
  }

  appendRow_("Support requests", ["Submitted (UTC)", "Name", "Email", "Topic", "Message"], [
    new Date(),
    sheetSafe_(name),
    sheetSafe_(email),
    category,
    sheetSafe_(message),
  ]);
}

function saveUsage_(parameters) {
  const eventName = String(parameters.event || "");
  const language = LANGUAGES.has(parameters.language) ? parameters.language : "en";
  const documentType = String(parameters.documentType || "");

  if (!USAGE_EVENTS.has(eventName)) throw new Error("Unknown usage event.");
  if (eventName === "pdf_created" && !DOCUMENT_TYPES.has(documentType)) {
    throw new Error("Unknown document type.");
  }

  appendRow_("Usage", ["Recorded (UTC)", "Event", "Language", "Document type"], [
    new Date(),
    eventName,
    language,
    DOCUMENT_TYPES.has(documentType) ? documentType : "",
  ]);
}

function appendRow_(sheetName, headings, values) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) throw new Error("Bind this script to the support spreadsheet.");

  let sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) sheet = spreadsheet.insertSheet(sheetName);
  if (sheet.getLastRow() === 0) sheet.appendRow(headings);
  sheet.appendRow(values);
}

function cleanText_(value, maximumLength) {
  return String(value || "").trim().slice(0, maximumLength);
}

function sheetSafe_(value) {
  const text = String(value || "");
  return /^[\s]*[=+\-@]/.test(text) ? `'${text}` : text;
}

function textResponse_(value) {
  return ContentService.createTextOutput(value).setMimeType(ContentService.MimeType.TEXT);
}
