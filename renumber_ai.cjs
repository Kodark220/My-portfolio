const fs = require('fs');
const path = './src/data/artworks.json';

let data = JSON.parse(fs.readFileSync(path, 'utf8'));

let aiCounter = 1;

for (const item of data) {
  if (item.category === 'ai-gen') {
    // Format the counter to be two digits, e.g. 01, 02, 03
    const numStr = aiCounter.toString().padStart(2, '0');
    item.id = `AI-${numStr}`;
    aiCounter++;
  }
}

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('Successfully renumbered AI images.');
