const crypto = require("node:crypto");

function id(prefix) {
  return `${prefix}_${crypto.randomUUID()}`;
}

function nowMs() {
  return Date.now();
}

function firstMatch(regex, text) {
  const m = text.match(regex);
  return m ? m[0] : null;
}

function pickEmail(text) {
  return firstMatch(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i, text);
}

function pickPhone(text) {
  // Very permissive; refined later with locale rules
  return firstMatch(/(\+?\d[\d\s().-]{7,}\d)/, text);
}

function pickWebsite(text) {
  return firstMatch(
    /\b((https?:\/\/)?(www\.)?[a-z0-9-]+\.[a-z]{2,}(\/[^\s]*)?)\b/i,
    text
  );
}

module.exports = { id, nowMs, pickEmail, pickPhone, pickWebsite };

