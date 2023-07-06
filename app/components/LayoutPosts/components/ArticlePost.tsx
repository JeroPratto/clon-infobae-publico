import News from '@/app/models/news.model'
import estilos from './styles/ArticlePost.module.css'
import Image from 'next/image'
import Link from 'next/link'
import noImage from '@/public/no-image.webp'

export type ArticlePostProps = {
	news: News
}

const ArticlePost: React.FC<ArticlePostProps> = ({ news }) => {
	const normalizeQuotes = (text: string) => {
		return text.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"')
	}
	const title =
		news.title.length > 75
			? normalizeQuotes(news.title.slice(0, 75) + '...')
			: normalizeQuotes(news.title)
	return (
		<Link href={'/article'} className={estilos.container}>
			<h2 className={estilos.title}>{title}</h2>
			<div className={estilos.containerImg}>
				<Image
					fill
					src={news.urlToImage ? news.urlToImage : noImage}
					alt={normalizeQuotes(news.title)}
					className={estilos.img}
				/>
			</div>
		</Link>
	)
}

export default ArticlePost
