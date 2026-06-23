import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const srcFont = path.join(rootDir, 'preeti.otf');
const destDir = path.join(rootDir, 'public', 'fonts');
const destFont = path.join(destDir, 'preeti.otf');

try {
  // Ensure public/fonts directory exists
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log(`Created directory: ${destDir}`);
  }

  // Copy font file
  if (fs.existsSync(srcFont)) {
    fs.copyFileSync(srcFont, destFont);
    console.log(`Copied ${srcFont} to ${destFont} successfully!`);
  } else {
    console.warn(`Warning: Source font file not found at ${srcFont}`);
  }
} catch (error) {
  console.error('Error copying font file:', error);
  process.exit(1);
}
