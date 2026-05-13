const fs = require('fs');

function parseMarkdown(filePath, category) {
  const content = fs.readFileSync(filePath, 'utf8');
  const items = [];
  const sections = content.split('## ').slice(1);

  for (const section of sections) {
    const lines = section.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const titleMatch = lines[0].match(/^(.*?): (.*)$/);
    if (!titleMatch) continue;

    const id = titleMatch[1].trim();
    const title = titleMatch[2].trim();

    let image = '';
    const imgMatch = section.match(/!\[.*?\]\(\.\/(assets\/images\/.*?)\)/);
    if (imgMatch) {
      image = '/' + imgMatch[1].replace('assets/images', 'images');
    }

    const toolMatch = section.match(/\*\*Tool:\*\*\s*(.*)/);
    const tool = toolMatch ? toolMatch[1].trim() : '';

    const promptMatch = section.match(/\*\*Prompt:\*\*\s*(.*)/);
    const prompt = promptMatch ? promptMatch[1].trim() : '';

    const whatISeeMatch = section.match(/\*\*What I see:\*\*\s*(.*)/);
    const whatISee = whatISeeMatch ? whatISeeMatch[1].trim() : '';

    const whatIdChangeMatch = section.match(/\*\*What I'd change:\*\*\s*(.*)/);
    const whatIdChange = whatIdChangeMatch ? whatIdChangeMatch[1].trim() : '';

    const projectContextMatch = section.match(/\*\*Project context:\*\*\s*(.*)/);
    const projectContext = projectContextMatch ? projectContextMatch[1].trim() : '';

    const subjectMatch = section.match(/\*\*Subject:\*\*\s*(.*)/);
    const subject = subjectMatch ? subjectMatch[1].trim() : '';

    const compMatch = section.match(/\*\*Composition:\*\*\s*(.*)/);
    const composition = compMatch ? compMatch[1].trim() : '';

    const lightMatch = section.match(/\*\*Lighting:\*\*\s*(.*)/);
    const lighting = lightMatch ? lightMatch[1].trim() : '';

    const colorMatch = section.match(/\*\*Color:\*\*\s*(.*)/);
    const color = colorMatch ? colorMatch[1].trim() : '';

    const styleMatch = section.match(/\*\*Style:\*\*\s*(.*)/);
    const style = styleMatch ? styleMatch[1].trim() : '';

    items.push({
      id,
      title,
      image,
      category,
      tool,
      prompt,
      whatISee,
      whatIdChange,
      projectContext,
      subject,
      composition,
      lighting,
      color,
      style
    });
  }

  return items;
}

const aiGen = parseMarkdown('ai-gen.md', 'ai-gen');
const autodesk = parseMarkdown('autodesk.md', 'autodesk');

const allItems = [...autodesk, ...aiGen];

if (!fs.existsSync('./src/data')) {
  fs.mkdirSync('./src/data', { recursive: true });
}

fs.writeFileSync('./src/data/artworks.json', JSON.stringify(allItems, null, 2));
console.log('Successfully generated artworks.json with', allItems.length, 'items');
