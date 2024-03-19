import { deleteAsync } from 'del'

async function cleanCache() {
	return cache.clearAll()
}

async function cleanSrc() {
	return deleteAsync('public/assets/images/**/*')
}

async function cleanBuild() {
	return deleteAsync('public/assets/images-minified/**/*')
}

async function cleanAll() {
	return deleteAsync([
		'public/assets/images/**/*',
		'public/assets/images-minified/**/*',
	])
}

export { cleanCache, cleanSrc, cleanBuild, cleanAll }
