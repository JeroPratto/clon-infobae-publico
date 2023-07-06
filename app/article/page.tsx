import getDate from '../components/Date/getDate'
import Article from './components/article'
import TitleAndDescription from './components/titleAndDescription'
import styles from './styles/articlePage.module.css'

export default async function Home() {
	const date = getDate()
	return (
		<div className='marginAuto'>
			<TitleAndDescription />
			<p className={styles.date}>{date}</p>
			<Article />
		</div>
	)
}
