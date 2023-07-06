import News from '@/app/models/news.model'
import { ArticlePost } from '../components'
const RenderArticles = (news: News[]) => {
	return news.map((article) => <ArticlePost key={article.url} news={article} />)
}

export default RenderArticles
