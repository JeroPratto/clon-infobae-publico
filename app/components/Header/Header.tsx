import { headerMock } from '@/mocks'
import Image from 'next/image'
import logo from 'public/logo.svg'
import React from 'react'
import estilos from './styles/header.module.css'
import Link from 'next/link'
export type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
	return (
		<div className={estilos.container}>
			<Link href={'/'} className={estilos.containerLogo}>
				<Image src={logo} alt='infobae logo' />
			</Link>
			<ul className={estilos.containerInfo}>
				{headerMock.map((name) => (
					<Link href='#' key={`header-${name}`} className={estilos.link}>
						<li>{name}</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default Header
