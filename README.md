# gulp-image-minifier

It's a tool for image minification and format conversion, leveraging the Gulp ecosystem for optimization. It supports various formats for minification and conversion such as JPG, PNG, SVG, and WEBP.

## Requirements

1. Node: Version 20.10.0 was used in this case.
2. Package Manager: You have the option to choose between NPM, Yarn, or other alternatives.

## Installation

1. Move the images you want to optimize to the `public/assets/images` folder.
2. Run the following commands in your terminal:

```bash
yarn install
yarn dev
```

## Dependencies

These are the dependencies used in the project, along with their respective versions:

```bash
    "del": "7.1.0",
    "gulp": "4.0.2",
    "gulp-cache": "1.1.3",
    "gulp-imagemin": "9.0.0",
    "gulp-webp": "5.0.0",
    "inquirer": "9.2.16"
```

## Usage

After running yarn dev, the following menu will be displayed:

```bash
? Select an option: (Use arrow keys)
> Minify images (JPG, PNG, SVG)
> Convert to WebP
> Clean cache
> Clean build directory (public/assets/images-minified)
> Clean src directory (public/assets/images)
> Clean all
> Exit
```

## Explanation

```bash
- Minify images (JPG, PNG, SVG): This option will minify images in JPG, PNG, and SVG formats.
- Convert to WebP: This option will convert images to WebP format.
- Clean cache: This will clear the project cache.
- Clean build directory (public/assets/images-minified): It will remove all processed images in the public/assets/images-minified folder.
- Clean src directory (public/assets/images): It will remove all original images in the public/assets/images folder.
- Clean all: This will clean both the original images folder and the processed images folder.
- Exit: It will exit the menu.
```

## Resultados

The processed images will be found in the `public/assets/images-minified` folder.
