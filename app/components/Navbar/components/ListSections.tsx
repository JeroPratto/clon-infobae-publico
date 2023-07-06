import { navbarMock } from '@/mocks'
import estilos from '../styles/navbar.module.css'

export type ListSectionsProps = {}

const ListSections: React.FC<ListSectionsProps> = () => {
	return (
		<ul className={estilos.containerSections}>
			{navbarMock.map((name) => (
				<li key={`navbar-${name}`} className={estilos.item}>
					{name}
				</li>
			))}
		</ul>
	)
}
export default ListSections
