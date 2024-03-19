import inquirer from 'inquirer'

import { images, webpVersion } from '../tasks/image.js'
import { cleanCache, cleanSrc, cleanBuild, cleanAll } from '../tasks/clean.js'

const menuOptions = [
	{
		type: 'list',
		name: 'option',
		message: 'Select an option:',
		choices: [
			'Minify images (JPG, PNG, SVG)',
			'Convert to WebP',
			'Clean cache',
			'Clean build directory (public/assets/images-minified)',
			'Clean src directory (public/assets/images)',
			'Clean all',
			'Exit',
		],
	},
]

async function showMenu() {
	try {
		do {
			const response = await inquirer.prompt(menuOptions)
			console.clear()
			const selectedOption = response.option
			console.clear()
			switch (selectedOption) {
				case 'Minify images (JPG, PNG, SVG)':
					await images()
					console.log('Minifying images...')
					console.log('Images minified!')
					break
				case 'Convert to WebP':
					console.log('Converting to WebP...')
					await webpVersion()
					console.log('Images converted to WebP!\n')
					break
				case 'Clean cache':
					console.log('Cleaning cache...')
					await cleanCache()
					console.log('Cache cleaned!\n')
					break
				case 'Clean build directory (public/assets/images-minified)':
					console.log(
						'Cleaning build directory (public/assets/images-minified)...'
					)
					await cleanBuild()
					console.log(
						'Build directory cleaned (public/assets/images-minified)!\n'
					)
					break
				case 'Clean src directory (public/assets/images)':
					console.log('Cleaning source directory (public/assets/images)...')
					await cleanSrc()
					console.log('Source directory cleaned (public/assets/images)!\n')
					break
				case 'Clean all':
					console.log('Cleaning all directories...')
					await cleanAll()
					console.log('All directories cleaned!\n')
					break
				case 'Exit':
					console.log('Exiting the program.\n')
					return
			}
			// Wait for a moment before showing the menu again
			await new Promise((resolve) => setTimeout(resolve, 2000))
			console.log('\r')
		} while (true)
	} catch (error) {
		console.error('An error occurred:', error)
		// Ask the user if they want to continue after the error
		const continueResponse = await inquirer.prompt({
			type: 'confirm',
			name: 'continue',
			message: 'Do you want to try again?',
			default: false,
		})

		if (!continueResponse.continue) {
			console.log('Exiting the program due to an error.\n')
			return
		}
	}
}

export default showMenu
