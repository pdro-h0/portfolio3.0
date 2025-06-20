import { Projetos } from "../models/Projetos"
import { Tipo } from "../models/Tipo"


const projetos = Projetos
export async function obterProjetos() {

	return {
		todos: projetos,
		get frontend() {
			return projetos.filter((projeto) => projeto.tipo === Tipo.FRONTEND)
		},
		get backend() {
			return projetos.filter((projeto) => projeto.tipo === Tipo.BACKEND)
		},
		get destaques() {
			return projetos.filter((projeto) => projeto.destaque)
		},
	}
}

export async function obterProjeto(id: number) {
	return projetos.find(projeto => projeto.id === id)
}
