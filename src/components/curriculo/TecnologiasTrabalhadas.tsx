import { tecnologia } from "@/models/Tecnologias"

export interface TecnologiasTrabalhadasProps {
    lista: tecnologia[]
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
    return props.lista ? (
        <div className="flex justify-center items-center p-6 w-full lg:w-72 bg-[#101016] border border-zinc-800 rounded-2xl">
            <div className="flex justify-center gap-x-3 flex-wrap">
                {props.lista.map((tecnologia) => (
                    <div key={tecnologia.id}>
                        <span className="text-[#713aed] font-bold">#</span>
                        <span>{tecnologia.nome}</span>
                    </div>
                ))}
            </div>
        </div>
    ) : null
}
