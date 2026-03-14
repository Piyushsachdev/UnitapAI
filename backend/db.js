const path = require("node:path");
const fs = require("node:fs");
const Database = require("better-sqlite3");

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

const dataDir = path.join(__dirname, "data");
ensureDir(dataDir);

const dbPath = path.join(dataDir, "unitap.sqlite");
const db = new Database(dbPath);

db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS scans (
    id TEXT PRIMARY KEY,
    created_at INTEGER NOT NULL,

    source TEXT NOT NULL,
    raw_text TEXT NOT NULL,

    name TEXT,
    job_title TEXT,
    company TEXT,
    phone TEXT,
    email TEXT,
    website TEXT,
    address TEXT,

    extra_json TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS meetings (
    id TEXT PRIMARY KEY,
    created_at INTEGER NOT NULL,

    title TEXT,
    transcript TEXT NOT NULL,
    summary TEXT NOT NULL,
    action_items_json TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS profiles (
    id TEXT PRIMARY KEY,
    created_at INTEGER NOT NULL,
    username TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    organization TEXT,
    job_title TEXT,
    bio TEXT
  );
`);

module.exports = { db };

