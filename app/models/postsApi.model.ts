import News from './news.model'

export default interface PostsApiInterface {
	status: string
	totalResults: number
	articles: News[]
}
