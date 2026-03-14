const { appendScanRow } = require("./excel");
const path = require("node:path");
const fs = require("node:fs");

async function test() {
  const EXPORT_XLSX_PATH = path.join(__dirname, "data", "unitap_scans.xlsx");
  const testScan = {
    id: "scan_test_" + Date.now(),
    created_at: Date.now(),
    name: "John Doe",
    job_title: "Senior Developer",
    company: "Test Corp",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    website: "www.example.com",
    address: "123 Test St",
    raw_text: "John Doe\nSenior Developer\nTest Corp\n123-456-7890\njohn.doe@example.com\nwww.example.com"
  };

  console.log("Testing Excel export...");
  try {
    await appendScanRow(EXPORT_XLSX_PATH, testScan);
    console.log("Successfully appended row to Excel file.");
    
    if (fs.existsSync(EXPORT_XLSX_PATH)) {
      const stats = fs.statSync(EXPORT_XLSX_PATH);
      console.log(`Excel file exists: ${EXPORT_XLSX_PATH}`);
      console.log(`File size: ${stats.size} bytes`);
    } else {
      console.error("Excel file was not created!");
    }
  } catch (err) {
    console.error("Error appending to Excel:", err);
  }
}

test();
