const fs = require('fs');
const path = require('path');

// Read the markdown file and extract image references
function extractImagesFromMd(mdContent) {
  const images = new Set();

  // Match both Markdown and HTML image syntax
  const mdImageRegex = /!\[.*?\]\((.*?)\)/g;
  const htmlImageRegex = /src="([^"]*\.(?:jpg|gif|JPG|PNG|png))"/g;

  let match;
  while ((match = mdImageRegex.exec(mdContent)) !== null) {
    const imagePath = match[1].split('/').pop();
    images.add(imagePath);
  }

  while ((match = htmlImageRegex.exec(mdContent)) !== null) {
    const imagePath = match[1].split('/').pop();
    images.add(imagePath);
  }

  return images;
}

// Get list of images in assets directory
function getImagesInDirectory(dirPath) {
  const images = new Set();
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    if (file.match(/\.(jpg|gif|JPG|PNG|png)$/i)) {
      images.add(file);
    }
  });

  return images;
}

// Check file extension consistency
function checkExtensions(images) {
  const inconsistentExt = new Set();
  const pngFiles = new Set();

  images.forEach(img => {
    const ext = path.extname(img).toLowerCase();
    const originalExt = path.extname(img);

    if (ext !== originalExt) {
      inconsistentExt.add(img);
    }

    if (ext === '.png') {
      pngFiles.add(img);
    }
  });

  return { inconsistentExt, pngFiles };
}

// Main function
function checkImages() {
  const mdPath = path.join(__dirname, '../_posts/buildon-trek-nepal-jan-2025.md');
  const assetsPath = path.join(__dirname, '../public/assets/blog/buildon-trek-nepal-jan-2025');

  console.log('📁 Checking images...\n');
  console.log(`📝 Markdown file: ${mdPath}`);
  console.log(`🖼️  Assets directory: ${assetsPath}\n`);

  // Read markdown file
  const mdContent = fs.readFileSync(mdPath, 'utf8');
  const referencedImages = extractImagesFromMd(mdContent);
  const existingImages = getImagesInDirectory(assetsPath);

  console.log('📊 Summary:');
  console.log(`- Total images referenced in MD: ${referencedImages.size}`);
  console.log(`- Total images in assets folder: ${existingImages.size}\n`);

  // Check extensions
  const { inconsistentExt, pngFiles } = checkExtensions(existingImages);

  if (inconsistentExt.size > 0) {
    console.log('⚠️  Files with inconsistent extensions (should be lowercase .jpg or .gif):');
    inconsistentExt.forEach(img => console.log(`   - ${img}`));
    console.log('');
  }

  if (pngFiles.size > 0) {
    console.log('⚠️  PNG files found (should be converted to JPG):');
    pngFiles.forEach(img => console.log(`   - ${img}`));
    console.log('');
  }

  // Find images referenced but not existing
  const missingImages = new Set(
    [...referencedImages].filter(x => !existingImages.has(x))
  );

  // Find images existing but not referenced
  const unusedImages = new Set(
    [...existingImages].filter(x => !referencedImages.has(x))
  );

  if (missingImages.size > 0) {
    console.log('❌ Missing images (referenced in MD but not found in assets):');
    missingImages.forEach(img => console.log(`   - ${img}`));
  } else {
    console.log('✅ All referenced images exist in assets');
  }

  console.log('\n');

  if (unusedImages.size > 0) {
    console.log('⚠️  Unused images (exist in assets but not referenced in MD):');
    unusedImages.forEach(img => console.log(`   - ${img}`));
  } else {
    console.log('✅ All assets are referenced in the markdown');
  }

  console.log('\n📝 Referenced images:');
  [...referencedImages].sort().forEach(img => console.log(`   - ${img}`));
}

checkImages();
