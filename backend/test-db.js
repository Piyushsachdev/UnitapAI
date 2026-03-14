const { db } = require("./db");
const { id, nowMs } = require("./utils");

async function testDb() {
  const testId = id("scan");
  const record = {
    id: testId,
    created_at: nowMs(),
    source: "test_source",
    raw_text: "Sample OCR text for testing database integration",
    name: "Jane Smith",
    job_title: "Product Manager",
    company: "Innovate LLC",
    phone: "987-654-3210",
    email: "jane.smith@innovate.com",
    website: "www.innovate.com",
    address: "456 Innovation Way",
    extra_json: JSON.stringify({ provider: "test", note: "Verification record" })
  };

  console.log("Testing database insertion...");
  try {
    db.prepare(
      `INSERT INTO scans 
       (id, created_at, source, raw_text, name, job_title, company, phone, email, website, address, extra_json)
       VALUES
       (@id, @created_at, @source, @raw_text, @name, @job_title, @company, @phone, @email, @website, @address, @extra_json)`
    ).run(record);
    console.log(`Successfully inserted record with ID: ${testId}`);

    const row = db.prepare("SELECT * FROM scans WHERE id = ?").get(testId);
    if (row && row.name === "Jane Smith") {
      console.log("Successfully retrieved and verified record from database.");
    } else {
      console.error("Database record verification failed!");
    }
  } catch (err) {
    console.error("Error inserting to database:", err);
  }
}

testDb();
