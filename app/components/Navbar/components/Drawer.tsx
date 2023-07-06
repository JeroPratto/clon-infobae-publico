'use client'
import { drawerMock } from '@/mocks'
import Image from 'next/image'
import iconMenu from 'public/menu-icon.svg'
import XIcon from 'public/x-icon.svg'
import { useEffect, useRef, useState } from 'react'
import estilos from './styles/drawer.module.css'

export type DrawerProps = {}

const Drawer: React.FC<DrawerProps> = () => {
	const [isOpen, setIsOpen] = useState(false)
	const drawerRef = useRef<HTMLDivElement>(null)

	const toggleDrawer = () => {
		setIsOpen(!isOpen)
	}

	const handleEscapeKey = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			setIsOpen(false)
		}
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (
			drawerRef.current &&
			!drawerRef.current.contains(event.target as Node)
		) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', handleEscapeKey, false)
		document.addEventListener('mousedown', handleClickOutside, false)
		return () => {
			document.removeEventListener('keydown', handleEscapeKey, false)
			document.removeEventListener('mousedown', handleClickOutside, false)
		}
	}, [])

	return (
		<>
			{isOpen && (
				<button className={estilos.button} onClick={toggleDrawer}>
					<Image src={XIcon} alt='close menu' className={estilos.menu} />
				</button>
			)}
			{!isOpen && (
				<button className={estilos.button} onClick={toggleDrawer}>
					<Image src={iconMenu} alt='menu' className={estilos.menu} />
				</button>
			)}
			<div
				className={`${estilos.drawer} ${isOpen ? estilos.open : ''}`}
				ref={drawerRef}
			>
				<input className={estilos.input} placeholder='Buscar' />
				<ul className={estilos.containerList}>
					{drawerMock.map((item) => (
						<li key={`drawer-${item}`} className={estilos.item}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default Drawer
