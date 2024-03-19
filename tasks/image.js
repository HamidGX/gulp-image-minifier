import inquirer from 'inquirer'

import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import cache from 'gulp-cache'
import webp from 'gulp-webp'

const { src, dest } = gulp

// Functions for image processing
async function images() {
	const answers = await inquirer.prompt([
		{
			type: 'list',
			name: 'quality',
			message: 'Select the quality of the images:',
			choices: ['Low', 'Medium', 'High'],
		},
	])

	const options = {
		progressive: true,
		interlaced: false,
		optimizationLevel:
			answers.quality === 'High' ? 4 : answers.quality === 'Medium' ? 3 : 2,
	}

	src('public/assets/images/**/*')
		.pipe(cache(imagemin(options)))
		.pipe(dest('public/assets/images-minified'))
}

async function webpVersion() {
	const answers = await inquirer.prompt([
		{
			type: 'list',
			name: 'quality',
			message: 'Select the quality of WebP images:',
			choices: [
				{ name: 'Low (Quality: 20)', value: 20 },
				{ name: 'Medium (Quality: 50 Recommended)', value: 50 },
				{ name: 'High (Quality: 80)', value: 80 },
			],
		},
	])
	const options = {
		quality: answers.quality,
	}
	return src('public/assets/images/**/*')
		.pipe(webp(options))
		.pipe(dest('public/assets/images-minified'))
}

export { images, webpVersion }
