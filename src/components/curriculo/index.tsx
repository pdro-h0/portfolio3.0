import TecnologiasTrabalhadas from "./TecnologiasTrabalhadas"
import MiniCV from "./MiniCV"
import { tecnologia } from "@/models/Tecnologias"

export interface CurriculoProps {
	tecnologias: tecnologia[]
}

export default function Curriculo(props: CurriculoProps) {
	return (
		<div className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
			<MiniCV />
			<TecnologiasTrabalhadas lista={props.tecnologias} />
		</div>
	)
}
