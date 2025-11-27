import sharp from 'sharp';
import { readdir, statSync, mkdirSync, copyFileSync } from 'fs';
import { promises as fs } from 'fs';
import { join } from 'path';
import { existsSync } from 'fs';

const ASSETS_DIR = join(process.cwd(), 'src', 'assets');
const TARGET_WIDTH = 1600;
const TARGET_HEIGHT = 900;
const TARGET_QUALITY = 85;

async function resizeImage(inputPath, outputPath) {
  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`Processing: ${inputPath}`);
    console.log(`  Original size: ${metadata.width}x${metadata.height}`);
    
    // Resize to 16:9 with center cropping to preserve course name
    await sharp(inputPath)
      .resize(TARGET_WIDTH, TARGET_HEIGHT, {
        fit: 'cover',
        position: 'center' // Center crop to preserve course name in middle
      })
      .jpeg({ quality: TARGET_QUALITY })
      .toFile(outputPath);
    
    const outputMetadata = await sharp(outputPath).metadata();
    const stats = statSync(outputPath);
    console.log(`  Resized to: ${outputMetadata.width}x${outputMetadata.height}`);
    console.log(`  File size: ${(stats.size / 1024).toFixed(2)} KB`);
    console.log(`  ✅ Success!\n`);
  } catch (error) {
    console.error(`  ❌ Error processing ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Resizing program images to 16:9 (1600x900px)...\n');
  
  if (!existsSync(ASSETS_DIR)) {
    console.error(`❌ Assets directory not found: ${ASSETS_DIR}`);
    process.exit(1);
  }
  
  try {
    const files = await readdir(ASSETS_DIR);
    const imageFiles = files.filter(file => 
      file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')
    );
    
    if (imageFiles.length === 0) {
      console.log('No image files found in assets directory.');
      return;
    }
    
    console.log(`Found ${imageFiles.length} image file(s):\n`);
    
    // Create backup directory
    const backupDir = join(ASSETS_DIR, 'backup');
    if (!existsSync(backupDir)) {
      mkdirSync(backupDir, { recursive: true });
      console.log(`📁 Created backup directory: ${backupDir}\n`);
    }
    
    // Process each image
    for (const file of imageFiles) {
      const inputPath = join(ASSETS_DIR, file);
      const backupPath = join(backupDir, file);
      const outputPath = inputPath;
      
      // Backup original
      if (!existsSync(backupPath)) {
        copyFileSync(inputPath, backupPath);
        console.log(`📦 Backed up: ${file}`);
      }
      
      // Resize image
      await resizeImage(inputPath, outputPath);
    }
    
    console.log('✨ All images processed successfully!');
    console.log(`💾 Original images backed up to: ${backupDir}`);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();

