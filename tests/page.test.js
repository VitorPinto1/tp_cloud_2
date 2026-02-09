const fs = require('fs');
const path = require('path');

// Test pour valider le titre dans la page
function testPageTitle() {
  const pagePath = path.join(__dirname, '../app/page.js');
  const content = fs.readFileSync(pagePath, 'utf8');
  
  if (!content.includes('Home')) {
    console.error('❌ Test failed: Title "Home" not found in page.js');
    process.exit(1);
  }
  
  console.log('✅ Test passed: Title "Home" is present in page.js');
}

// Exécuter le test
testPageTitle();
