import Cabecalho from "../shared/Cabecalho"
import Tecnologias from "../tecnologias/Tecnologias"

export interface PrincipalProps {
	tecnologias: any[]
}

export default function Principal(props: PrincipalProps) {
	return (
		<div
			className="
                flex flex-col items-center justify-center h-[250px] lg:h-[345px]
                lg:bg-[url('/principal3.png')] lg:bg-cover lg:bg-center relative mb-8
            "
		>
			<Cabecalho />
			<div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
				<div className="flex flex-col items-center gap-1">
					<h1 className="flex gap-3 items-center">
						<span className="size-2 rounded-md bg-[#713aed]" />
						<span className="text-3xl sm:text-5xl font-bold text-center">
							Pedro Henrique
						</span>
						<span className="size-2 rounded-md bg-[#713aed]" />
					</h1>
					<h2 className="font-bold text-center">Programador Full stack</h2>
				</div>
				<Tecnologias lista={props.tecnologias} />
			</div>
		</div>
	)
}
