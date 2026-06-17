import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';

// Self-executing script to copy the generated OG image from AppData to public folder
try {
  const sourceFile = 'C:/Users/Administrator/.gemini/antigravity-cli/brain/3c14a5df-49cb-4e4e-98ff-6ca6d2a25e01/og_image_1781695929462.jpg';
  const destDir = './public';
  const destFile = path.join(destDir, 'og-image.jpg');

  if (fs.existsSync(sourceFile)) {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(sourceFile, destFile);
    console.log('Successfully copied OG image asset to public/og-image.jpg');
  } else {
    console.log('Source OG image not found at:', sourceFile);
  }
} catch (error) {
  console.error('Warning: Failed to copy OG image asset:', error);
}

// https://astro.build/config
export default defineConfig({
  site: 'https://fontconverterhub.com',
  vite: {
    plugins: [tailwindcss()],
  },
});

