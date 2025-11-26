# Crispy Bites - Product Images

## Generated Images (Already in public/images/)
The following images have been generated and are ready to use:
- ✅ hero-bg.jpg - Hero background
- ✅ chicken-samosa.jpg - Chicken Samosa
- ✅ veg-samosa.jpg - Vegetable Samosa
- ✅ beef-samosa.jpg - Beef Samosa
- ✅ chicken-kebab.jpg - Chicken Seekh Kebab
- ✅ beef-kebab.jpg - Beef Seekh Kebab
- ✅ chicken-cutlet.jpg - Chicken Cutlets

## Placeholder Images Needed
To complete the product showcase, please add the following images to `public/images/`:

1. **veg-cutlet.jpg** - Vegetable cutlets (golden brown, crispy)
2. **spring-roll.jpg** - Chicken spring rolls (crispy, golden)
3. **nuggets.jpg** - Chicken nuggets (golden, crispy coating)
4. **achaar.jpg** - Mixed pickle in jar
5. **mango-achaar.jpg** - Mango pickle in jar
6. **shami-kebab.jpg** - Chicken shami kebabs

## How to Add Your Own Images

### Option 1: Use Your Own Product Photos
1. Take high-quality photos of your products
2. Resize them to approximately 800x600px
3. Save them with the exact filenames listed above
4. Place them in the `public/images/` directory

### Option 2: Use Stock Photos
You can use free stock photo websites like:
- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

Search for terms like "samosa", "kebab", "cutlet", "spring roll", "nuggets", "pickle"

### Option 3: Create Placeholder Images
For now, you can create simple colored placeholder images:
```bash
# This will create placeholder images (requires ImageMagick)
cd public/images
convert -size 800x600 xc:#F59E0B -pointsize 48 -fill white -gravity center -annotate +0+0 "Veg Cutlet" veg-cutlet.jpg
convert -size 800x600 xc:#EA580C -pointsize 48 -fill white -gravity center -annotate +0+0 "Spring Roll" spring-roll.jpg
convert -size 800x600 xc:#DC2626 -pointsize 48 -fill white -gravity center -annotate +0+0 "Nuggets" nuggets.jpg
convert -size 800x600 xc:#F59E0B -pointsize 48 -fill white -gravity center -annotate +0+0 "Achaar" achaar.jpg
convert -size 800x600 xc:#EA580C -pointsize 48 -fill white -gravity center -annotate +0+0 "Mango Achaar" mango-achaar.jpg
convert -size 800x600 xc:#DC2626 -pointsize 48 -fill white -gravity center -annotate +0+0 "Shami Kebab" shami-kebab.jpg
```

## Note
The website will still work with missing images - they will show the gradient background. However, adding real product photos will significantly improve the visual appeal!
