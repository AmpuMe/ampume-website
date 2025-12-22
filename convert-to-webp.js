import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');

async function convertToWebP() {
  const files = fs.readdirSync(assetsDir);

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const filePath = path.join(assetsDir, file);
      const fileName = path.parse(file).name;
      const webpPath = path.join(assetsDir, `${fileName}.webp`);
      
      console.log(`Converting ${file} to WebP...`);
      
      try {
        await sharp(filePath)
          .webp({ quality: 80 }) // Match previous JPEG quality to see if we get savings
          .toFile(webpPath);

        const oldStats = fs.statSync(filePath);
        const newStats = fs.statSync(webpPath);
        
        console.log(`-> ${(oldStats.size / 1024).toFixed(2)}KB to ${(newStats.size / 1024).toFixed(2)}KB`);
      } catch (error) {
        console.error(`Error converting ${file}:`, error);
      }
    }
  }
}

convertToWebP();
