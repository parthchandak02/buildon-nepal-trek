const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

function convertToGif(filePath) {
  const dirName = path.dirname(filePath);
  const baseName = path.basename(filePath, path.extname(filePath));
  const outputPath = path.join(dirName, `${baseName}.gif`);

  console.log(`🎥 Converting: ${path.basename(filePath)}`);
  console.log(`   Input: ${filePath}`);
  console.log(`   Output: ${outputPath}\n`);

  // Using ffmpeg to convert video to GIF
  const command = `ffmpeg -i "${filePath}" -vf "fps=10,scale=480:-1:flags=lanczos" -c:v gif "${outputPath}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Error converting ${filePath}:`);
      console.error(`   ${error.message}`);
      return;
    }
    console.log(`✅ Successfully converted ${path.basename(filePath)} to GIF`);
  });
}

function findVideoFiles(dir) {
  console.log(`📁 Scanning directory: ${dir}\n`);

  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(`❌ Error reading directory ${dir}:`);
      console.error(`   ${err.message}`);
      return;
    }

    let videoCount = 0;

    files.forEach(file => {
      const fullPath = path.join(dir, file.name);

      if (file.isDirectory()) {
        findVideoFiles(fullPath);
      } else {
        const ext = path.extname(file.name).toLowerCase();
        if (ext === '.mp4' || ext === '.mov') {
          videoCount++;
          convertToGif(fullPath);
        }
      }
    });

    if (videoCount === 0) {
      console.log(`ℹ️  No video files found in ${dir}`);
    } else {
      console.log(`📊 Found ${videoCount} video file(s) in ${dir}`);
    }
  });
}

// Start from public/assets directory
const assetsDir = path.join(__dirname, '../public/assets');
console.log('🎬 Starting video conversion...\n');
console.log(`🔍 Looking for .mp4 and .mov files in: ${assetsDir}\n`);
findVideoFiles(assetsDir);
