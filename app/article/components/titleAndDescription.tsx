import styles from './styles/titleAndDescription.module.css'

export type titleAndDescriptionProps = {}

const TitleAndDescription: React.FC<titleAndDescriptionProps> = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				"No renunciar nunca a los sueños": el impactante documental con Messi y
				otros campeones a seis meses del Mundial
			</h1>
			<p className={styles.description}>
				Las imágenes son un emotivo recorrido de Leo en la Selección y los
				elogios de sus compañeros por sus valores y principios. La AFA publicó
				un especial con un cocincero francés como protagonista
			</p>
		</div>
	)
}

export default TitleAndDescription
