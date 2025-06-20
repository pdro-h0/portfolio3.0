import { Tecnologias } from "../models/Tecnologias"


export async function obterTecnologias() {
	const tecnologias = Tecnologias

	return {
		todas: tecnologias,
		get destaques() {
			return tecnologias.filter((tecnologia) => tecnologia.destaque)
		},
	}
}
