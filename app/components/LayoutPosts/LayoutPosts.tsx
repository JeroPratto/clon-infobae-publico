'use client'
import News from '@/app/models/news.model'
import React from 'react'
import estilos from './styles/layoutPosts.module.css'
import { renderArticles } from './utilities'

export type LayoutPostsProps = {
	news: News[]
}

const LayoutPosts: React.FC<LayoutPostsProps> = ({ news }) => {
	return (
		<>
			<div className={`${estilos.layoutBase} ${estilos.threeColumns}`}>
				{renderArticles(news.slice(0, 3))}
			</div>
			<div className={`${estilos.layoutBase} ${estilos.fourColumns}`}>
				{renderArticles(news.slice(3, 7))}
			</div>
			<div className={`${estilos.layoutBase} ${estilos.threeColumns}`}>
				{renderArticles(news.slice(7, 10))}
			</div>
			<div className={estilos.separator}>
				<h2 className={estilos.separatorTitle}>
					Aumenta el gas: habrá subas de hasta 37% desde mayo
				</h2>
			</div>
			<div className={`${estilos.layoutBase} ${estilos.twoColumns}`}>
				{renderArticles(news.slice(10, 12))}
			</div>
			<div className={`${estilos.layoutBase} ${estilos.fourColumns}`}>
				{renderArticles(news.slice(12, 16))}
			</div>
		</>
	)
}

export default LayoutPosts
