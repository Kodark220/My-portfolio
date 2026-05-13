const fs = require('fs');
const path = './src/data/artworks.json';

let data = JSON.parse(fs.readFileSync(path, 'utf8'));

// 1. Remove Flamingo Portrait (Symmetrical)
data = data.filter(item => item.title !== 'Flamingo Portrait (Symmetrical)');

// 2. Remove dashes to avoid looking AI-generated
// We will replace em-dashes (—) and en-dashes (–) and regular hyphens surrounded by spaces ( - )
function removeDashes(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/\s*[—–]\s*/g, ', ') // Replace em/en dashes with a comma and space
    .replace(/\s+-\s+/g, ', ')    // Replace spaced hyphens with a comma and space
}

for (const item of data) {
  for (const key in item) {
    if (typeof item[key] === 'string') {
      item[key] = removeDashes(item[key]);
    }
  }
}

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('Successfully updated artworks.json');
