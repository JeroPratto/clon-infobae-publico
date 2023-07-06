import estilos from '../styles/navbar.module.css'

export type ButtonsLoginProps = {}

const ButtonsLogin: React.FC<ButtonsLoginProps> = () => {
	return (
		<>
			<button className={`${estilos.btn} ${estilos.orangeBtn}`}>
				REGISTRARME
			</button>
			<button className={estilos.btn}>INICIAR SESION</button>
		</>
	)
}
export default ButtonsLogin
