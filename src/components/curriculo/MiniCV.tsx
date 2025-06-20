import Image from "next/image"

export default function MiniCV() {
	return (
		<div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-[#101016] border border-zinc-800 rounded-2xl px-6 pt-6">
			<Image src="/minha-foto2.png" alt="Foto de perfil" width={200} height={200} className="mr-6" />
			<div className="flex flex-col gap-5 self-center py-6 items-center  md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span
						className="
                            bg-gradient-to-r from-[#713aed] via-white to-white
                            text-transparent bg-clip-text text-2xl font-bold
                        "
					>
						Pedro Henrique
					</span>
					<span>Desenvolvedor Full Stack</span>
				</div>
				<p className="text-sm text-justify md:text-left lg:text-center xl:text-left">
					Minhas principais habilidades incluem React.js, Node.js, TypeScript, Express e PostgreSQL.
					Também tenho experiência com Docker, Git e APIs RESTful.
					Tenho formação em Ciência da Computação e experiência em projetos pessoais que simulam desafios do mundo real,
					como criação de APIs RESTful escaláveis, aplicação de princípios SOLID, e
					desenvolvimento de interfaces responsivas.
					Também já utilizei Docker, Fastify e Zod para elevar a qualidade e manutenção do código.
					Valorizo muito a escrita de código limpo e a troca de conhecimento em equipe.
				</p>
			</div>
		</div>
	)
}
