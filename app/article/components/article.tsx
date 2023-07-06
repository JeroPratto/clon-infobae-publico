import Image, { StaticImageData } from 'next/image'
import styles from './styles/article.module.css'
import messiAndDibu from './images/banner.jpg'
import equipoCompleto from './images/equipo-completo.webp'
import messiLevantandoLaCopa from './images/messi-levantando-la-copa.webp'

export type articleProps = {}

const Article: React.FC<articleProps> = () => {
	return (
		<div className={styles.container}>
			<ArticleImageAndDescription
				src={messiAndDibu}
				alt={'foto de messi y dibu junto a sus compañeros de selección'}
				description='La historia de Lionel Messi en la Selección. Sus reflexiones y las de
					sus compañeros que destacan los valores del capitán del seleccionado y
					mejor jugador del mundo'
			/>
			<p className={styles.parrafo}>
				Este domingo las familias argentinas se reúnen para festejar el Día del
				Padre. Hace seis exactamente seis meses, también un domingo, todos se
				juntaron para vivir la épica final del <span>Mundial Qatar 2022</span>{' '}
				que la Argentina le ganó a Francia por penales y alcanzar así la ansiada
				tercera estrella. Al cumplirse este primer semestre, se hicieron algunos
				homenajes. Uno con tinte emotivo y con reflexiones de{' '}
				<span>Lionel Messi</span> y algunos de sus compañeros y otro dedicados a
				todos los campeones y con una clara chicana a los franceses.
			</p>
			<p className={styles.parrafo}>
				La marca que provee de indumentaria a las selecciones de la AFA (Adidas)
				presentó un documental llamado “Alta en el cielo: La historia de Messi y
				Argentina luego de su histórica victoria en la Copa del Mundo 2022″ en
				la que se pueden ver las emociones que se vivieron durante un mes en el
				que los argentinos vibraron como pocas veces por esta conquista.
			</p>
			<p className={styles.parrafo}>
				El foco es transmitir qué piensan los compañeros de Messi sobre el
				capitán del seleccionado, más allá de sus cualidades técnicas que lo
				llevaron a ser el mejor jugador del planeta. De hecho arranca con
				algunos pasajes de La Pulga desde sus inicios con la Albiceleste como el{' '}
				<span>Mundial Sub 20 de 2005 en Países Bajos</span>, y su golazo a
				Brasil, para avanzar en el certamen que luego terminó conquistando
				Argentina.
			</p>
			<p className={styles.parrafo}>
				A parte de Leo, participan{' '}
				<span>
					Emiliano “Dibu” Martínez, Lisandro Martínez, Julián Álvarez, Rodrigo
					De Paul, Alexis Mac Allister, Paulo Dybala, Ángel Correa, Gerónimo
					Rulli, Juan Foyth y Exequiel Palacios.
				</span>
				Todos los participantes aportan su singular perspectiva sobre un torneo
				inolvidable y la profunda conexión que dicha victoria ha forjado entre
				ellos y sus hinchas.
			</p>
			<ArticleImageAndDescription
				src={equipoCompleto}
				alt='la selección argentina de futbol'
				description='El homenaje de la AFA por los seis meses de la épica final ganada a Francia en el Mundial Qatar 2022'
			/>
			<p className={styles.parrafo}>
				Los comentarios apunta a los valores y principios de Leo, no solo con
				sus compañeros, sino con todos los que componen la delegación argentina,
				desde los utileros o cualquier otro trabajador de la AFA. Messi trata a
				todos por igual y eso demuestra su gran humildad, como subrayó{' '}
				<span>“Dibu” Martínez.</span>
			</p>
			<p className={styles.parrafo}>
				Por otro lado, <span>De Paul</span>, por caso, destaca el ejemplo de
				resiliencia de Messi luego de algunos malos momentos como las finales
				perdidas que lo llevaron a anunciar su retiro de la Selección. El propio
				Leo en este material admite
				<span>
					“por suerte me arrepiento de haber tomado esa decisión y de haber
					vuelto”.
				</span>
			</p>
			<p className={styles.parrafo}>
				“Para mí jugar en la selección era un orgullo muy grande. Lo hacía con
				muchas ganas.{' '}
				<span>
					Si bien hubo momentos en que la pasé muy mal, me pone feliz haber
					ganado todo esto con la Selección. Pero creo que lo escuché muchas
					veces el no haberme rendido nunca después de tantos golpes que había
					tenido”
				</span>
				, afirmó Leo.
			</p>
			<p className={styles.parrafo}>
				Un ejemplo de esa perseverancia fue tomado del amistoso ante Panamá en
				marzo en el que se celebró la obtención de la Copa del Mundo. En ese
				caso los tres tiros libres en los que no pudo convertir, dos que pegaron
				en el palo y otro que desvió el arquero.
			</p>
			<ArticleImageAndDescription
				src={messiLevantandoLaCopa}
				alt='messi levantando la copa del mundo'
				description='El festejo de Lionel Messi y todos sus compañeros tras ganar el Mundial (REUTERS/Carl Recine/File Photo)'
			/>
			<p className={styles.parrafo}>
				“Nosotros con el fútbol y con el resultado y con el juego pudimos hacer
				que salga un poquito esa locura que nos toca vivir día a día. Poder
				llevar eso a las casas, aunque sea por un ratito, y creo que se vio en
				el final la locura que se vivió con la locura que la gente salió a las
				calles y lo celebró”, agregó Messi.
			</p>
			<p className={styles.parrafo}>
				“No quería quedarme con la sensación de que habían pasado oportunidades
				y que yo no las había aprovechado y que yo no había estado allí para
				intentarlo. Había conseguido todo a nivel clubes y a nivel individual.
				Me faltaba ganar algo con la Selección iba a ser especial por la forma
				en que vivimos el fútbol los argentinos”, subrayó Leo.
			</p>
			<p className={styles.parrafo}>
				“Ahora, casi en el final de mi carrera, siendo campeón de todo, es algo
				que estoy disfrutando muchísimo.{' '}
				<span>Aprendí que no solo se trata de ganar</span>. Que el camino
				recorrido todo este tiempo también te deja muchas enseñanzas de vida.
				Creo que el querer lograrlo, el intentarlo, sobre todo, se puede dar o
				no, pero <span>no renunciar nunca a los sueños</span>”, concluyó.
			</p>
			<p className={styles.parrafo}>
				Por otro lado, la AFA hizo un simpático video con una chicana a Francia,
				en el que un “chef” da cuenta de todo lo que se necesita para obtener
				las “Tres Estrellas” del sistema Michelin, creado en el país galo en
				1936 y que se entrega a la excelencia en la cocina. Mediante su
				desarrollo menciona una serie de condimentos necesarios y se relacionan
				con algunos de los jugadores de la Selección.
			</p>
			<p className={styles.parrafo}>
				Siempre con una sonrisa y poniéndole picante a sus comentarios. En el
				final disparó que “el sabor de la tercera estrella es inigualable”. Y
				para celebrar, tomó una copa y dijo “para brindar por los seis meses, el
				fútbol champán”.
			</p>
		</div>
	)
}

export default Article

type ArticleImageAndDescriptionProps = {
	src: string | StaticImageData
	alt: string
	description: string
}
const ArticleImageAndDescription: React.FC<ArticleImageAndDescriptionProps> = ({
	src,
	alt,
	description,
}) => {
	return (
		<div className={styles.containerImageAndDescription}>
			<div className={styles.containerImg}>
				<Image src={src} alt={alt} className={styles.baneerImg} fill />
			</div>
			<p className={styles.description}>{description}</p>
		</div>
	)
}
