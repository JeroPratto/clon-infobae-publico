import Image from 'next/image'
import logo from 'public/logo.svg'
import iconProfile from 'public/profile-icon.svg'
import React from 'react'
import getDate from '../Date/getDate'
import { Drawer } from './components'
import ButtonsLogin from './components/ButtonsLogin'
import ListSections from './components/ListSections'
import estilos from './styles/navbar.module.css'
import Link from 'next/link'

export type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = () => {
	const date = getDate()
	return (
		<nav className={estilos.container}>
			<Drawer />
			<p className={estilos.date}>{date}</p>
			<Link href={'/'} className={estilos.containerLogo}>
				<Image src={logo} alt='logo infobae' className={estilos.logo} />
			</Link>
			<ListSections />
			<div className={estilos.containerLogin}>
				<ButtonProfileMobile />
				<ButtonsLogin />
			</div>
		</nav>
	)
}

export default Navbar

const ButtonProfileMobile = () => {
	return (
		<button className={estilos.btnProfile}>
			<Image src={iconProfile} alt='profile' className={estilos.profile} />
		</button>
	)
}
