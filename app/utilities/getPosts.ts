async function getPosts() {
	console.log('Add api key in getPosts.ts')
	const url =
		'https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY'
		const response = await fetch(url, { cache: 'no-store' })
	if (!response.ok) {
		throw new Error('Failed to fetch data')
	}
	return response.json()
}

export default getPosts
