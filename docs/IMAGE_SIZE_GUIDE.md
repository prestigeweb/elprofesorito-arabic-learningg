# Image Size Guide for Program Images

## Recommended Standard Specifications

### **Aspect Ratio: 16:9 (1.78:1)**
This is the industry standard for web hero/card images and works perfectly for both:
- **Card view** (h-48 = 192px height, width varies by screen size)
- **Detail page view** (h-64/h-80 = 256px/320px height, full width)

### **Recommended Dimensions**

#### For Web (Retina/High DPI Displays):
- **Width:** 1600px
- **Height:** 900px (16:9 ratio)
- **File Size:** Keep under 250KB (optimized)

#### Alternative (if 1600px is too large):
- **Width:** 1200px
- **Height:** 675px (16:9 ratio)
- **File Size:** Keep under 150KB (optimized)

### **Why 16:9?**
1. ✅ Works perfectly with `object-cover` CSS
2. ✅ No white spaces or cropping issues
3. ✅ Consistent look across all programs
4. ✅ Industry standard for web cards
5. ✅ Works on all screen sizes (mobile, tablet, desktop)

## File Format & Optimization

### **Format:**
- **Primary:** JPG (for photos/images with many colors)
- **Alternative:** WebP (better compression, same quality)

### **Optimization Tips:**
1. **Compress before uploading:**
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: 80-85% quality for JPG
   - Target: 75-80% quality for WebP

2. **File Naming:**
   - Keep current naming convention
   - Example: `cafe-day.jpg`, `speaking-program.jpg`

## Current Container Sizes

### **Program Cards:**
- **Height:** 192px (h-48) or 224px (h-56) for text programs
- **Width:** Responsive (1/3 of container on large screens)

### **Detail Pages:**
- **Height:** 256px (mobile) / 320px (desktop) or 288px / 384px for text programs
- **Width:** Full width of content area (2/3 of container on large screens)

## Image Specifications Summary

| Aspect Ratio | Dimensions | Use Case |
|-------------|-----------|----------|
| **16:9** | 1600×900px | ✅ **RECOMMENDED** - Best for all programs |
| 16:9 | 1200×675px | Alternative if file size is concern |
| 4:3 | 1200×900px | Too square, not ideal |
| 3:2 | 1200×800px | Good but less common |

## Action Items for Your Images

### **For These Programs:**
1. **Mega Grammar** (grammar-program.jpg)
2. **Semana Práctica** (semana-program.jpg)
3. **Mini Curso** (mini-curso.jpg)
4. **Speaking Program** (speaking-program.jpg)
5. **Cursos Niños** (kids-program.jpg)

### **Steps:**
1. Resize images to **1600×900px** (16:9 aspect ratio)
2. Ensure text in images is positioned in the **center-middle** area (safe zone)
3. Compress to keep file size under 250KB
4. Save as JPG or WebP
5. Replace existing images in `src/assets/` folder

### **Safe Zone for Text:**
Keep important text/content in the **center 60%** of the image to avoid cropping on different screen sizes.

## Tools for Resizing

### **Free Online Tools:**
- [Squoosh.app](https://squoosh.app) - Best compression
- [TinyPNG](https://tinypng.com) - Easy compression
- [Photopea](https://www.photopea.com) - Free Photoshop alternative

### **Command Line (if you have ImageMagick):**
```bash
# Resize and compress
convert input.jpg -resize 1600x900 -quality 85 output.jpg
```

## Quick Reference

**Standard Image Size:** `1600px × 900px` (16:9 ratio)
**File Format:** JPG (optimized, 80-85% quality)
**Max File Size:** 250KB
**Aspect Ratio:** 16:9 (1.78:1)

This will ensure all program images look consistent and professional! 🎨

