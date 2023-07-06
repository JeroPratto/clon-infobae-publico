import React from 'react'
import estilos from './styles/headerPost.module.css'
import News from '@/app/models/news.model'
import Image from 'next/image'
import Link from 'next/link'
import noImage from '@/public/no-image.webp'
export type HeaderPostProps = {
	news: News[]
}

const HeaderPost: React.FC<HeaderPostProps> = ({ news }) => {
	return (
		<main className={estilos.container}>
			<FirtsPost {...news[0]} />
			<div className={estilos.containerLP}>
				<LateralPost {...news[1]} />
				<LateralPost {...news[2]} />
			</div>
		</main>
	)
}

export default HeaderPost

const FirtsPost = (news: News) => {
	return (
		<Link href={'/article'} className={estilos.firtsPost}>
			<div className={estilos.containerInfoFP}>
				<h2 className={estilos.titleFP}>{news.title}</h2>
				<p className={estilos.descFP}>{news.description}</p>
			</div>
			<div className={estilos.containerImgFP}>
				<Image
					fill
					src={news.urlToImage ? news.urlToImage : noImage}
					alt={news.title}
				/>
			</div>
		</Link>
	)
}

const LateralPost = (news: News) => {
	const title =
		news.title.length > 75 ? news.title.slice(0, 75) + '...' : news.title
	return (
		<Link href={'/article'} className={estilos.lateralPost}>
			<h3 className={estilos.titleLP}>{title}</h3>
			<div className={estilos.containerImgLP}>
				<Image
					fill
					src={news.urlToImage ? news.urlToImage : noImage}
					alt={news.title}
				/>
			</div>
		</Link>
	)
}
