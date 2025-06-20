import { obterProjeto } from "@/functions/projetos"
import { obterReadme } from "@/functions/github"
import Cabecalho from "@/components/shared/Cabecalho"
import CarrosselImagens from "@/components/shared/CarrosselImagens"
import Container from "@/components/shared/Container"
import Readme from "@/components/projetos/Readme"

// export const revalidate = 3600

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params
	const projeto = await obterProjeto(+id)

	if (!projeto) return null

	const readme = await obterReadme(projeto.repositorio)

	return (
		<>
			<Cabecalho />
			<Container className="py-7 flex flex-col items-center gap-10">
				<h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
				<CarrosselImagens imagens={projeto.imagens.slice(0)} />
				<Readme markdown={readme} />
			</Container>
		</>
	)
}
