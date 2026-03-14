const path = require("node:path");
const fs = require("node:fs");

let db;
const isPostgres = !!process.env.DATABASE_URL;

if (isPostgres) {
  const { Pool } = require("pg");
  db = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  // Helper to convert SQLite style @params to Postgres $1, $2
  const convertParams = (sql, params) => {
    if (!params || typeof params !== "object" || Array.isArray(params)) {
      return { sql, values: params };
    }
    const values = [];
    let i = 1;
    const newSql = sql.replace(/@(\w+)/g, (match, name) => {
      values.push(params[name]);
      return `$${i++}`;
    });
    return { sql: newSql, values };
  };

  module.exports = {
    isPostgres: true,
    async exec(sql) {
      return db.query(sql);
    },
    async run(sql, params) {
      const { sql: newSql, values } = convertParams(sql, params);
      return db.query(newSql, values);
    },
    async get(sql, params) {
      const { sql: newSql, values } = convertParams(sql, params);
      const res = await db.query(newSql, values);
      return res.rows[0];
    },
    async all(sql, params) {
      const { sql: newSql, values } = convertParams(sql, params);
      const res = await db.query(newSql, values);
      return res.rows;
    }
  };
} else {
  const Database = require("better-sqlite3");
  const dataDir = path.join(__dirname, "data");
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  const dbPath = path.join(dataDir, "unitap.sqlite");
  const sqlite = new Database(dbPath);
  sqlite.pragma("journal_mode = WAL");

  module.exports = {
    isPostgres: false,
    async exec(sql) {
      return sqlite.exec(sql);
    },
    async run(sql, params) {
      return sqlite.prepare(sql).run(params || {});
    },
    async get(sql, params) {
      return sqlite.prepare(sql).get(params || []);
    },
    async all(sql, params) {
      return sqlite.prepare(sql).all(params || []);
    }
  };
}

// Initialize tables
const initSql = `
  CREATE TABLE IF NOT EXISTS scans (
    id TEXT PRIMARY KEY,
    created_at BIGINT NOT NULL,
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
    created_at BIGINT NOT NULL,
    title TEXT,
    transcript TEXT NOT NULL,
    summary TEXT NOT NULL,
    action_items_json TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS profiles (
    id TEXT PRIMARY KEY,
    created_at BIGINT NOT NULL,
    username TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    organization TEXT,
    job_title TEXT,
    bio TEXT
  );
`;

// Note: BIGINT is used for created_at to avoid issues with large integers in Postgres
// but we'll treat it as a number in JS.

module.exports.init = async () => {
  await module.exports.exec(initSql);
};
