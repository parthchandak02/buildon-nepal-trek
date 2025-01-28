#!/bin/bash
# scripts/generate-favicons.sh
# Script to generate favicon files in different sizes from a source image

# Source favicon path
SOURCE="public/favicon/favicon.png"

# Check if source file exists
if [ ! -f "$SOURCE" ]; then
    echo "Error: Source file $SOURCE not found!"
    exit 1
fi

# Create resized versions
magick "$SOURCE" -resize 16x16 "public/favicon/favicon-16x16.png"
magick "$SOURCE" -resize 32x32 "public/favicon/favicon-32x32.png"
magick "$SOURCE" -resize 192x192 "public/favicon/android-chrome-192x192.png"
magick "$SOURCE" -resize 512x512 "public/favicon/android-chrome-512x512.png"
magick "$SOURCE" -resize 180x180 "public/favicon/apple-touch-icon.png"
magick "$SOURCE" -resize 150x150 "public/favicon/mstile-150x150.png"

# Generate ICO file (contains multiple sizes)
magick "$SOURCE" -define icon:auto-resize=16,32,48,64 "public/favicon/favicon.ico"

echo "✅ All favicon formats have been generated successfully!"
