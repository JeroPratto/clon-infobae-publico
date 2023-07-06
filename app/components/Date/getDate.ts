const getDate = () => {
	const fecha = new Date()
	const meses = [
		'ene',
		'feb',
		'mar',
		'abr',
		'may',
		'jun',
		'jul',
		'ago',
		'sep',
		'oct',
		'nov',
		'dic',
	]
	const fechaFormateada =
		fecha.getDate() + ' ' + meses[fecha.getMonth()] + ', ' + fecha.getFullYear()
	return fechaFormateada
}

export default getDate
