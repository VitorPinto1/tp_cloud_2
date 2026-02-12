const fs = require('fs');
const path = require('path');

function testDataJsonExists() {
  const dataPath = path.join(__dirname, '../data/data.json');
  if (!fs.existsSync(dataPath)) {
    console.error('Test failed: data/data.json not found');
    process.exit(1);
  }
  const raw = fs.readFileSync(dataPath, 'utf-8');
  JSON.parse(raw);
  console.log('Test passed: data/data.json exists and is valid JSON');
}

testDataJsonExists();
