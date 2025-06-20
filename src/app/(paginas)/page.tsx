import { obterProjetos } from "@/functions/projetos"
import { obterTecnologias } from "@/functions/tecnologias"
import Container from "@/components/shared/Container"
import Curriculo from "@/components/curriculo"
import Principal from "@/components/landing/Principal"
import { InfiniteMovingCards } from "@/components/ui/movingCards"
import Link from "next/link"

export default async function Home() {
    const tecnologias = await obterTecnologias()
    const projetos = await obterProjetos()

    return (
        <div>
            <Principal tecnologias={tecnologias.destaques} />
            <Container className="py-16 flex flex-col items-center gap-10">
                <InfiniteMovingCards
                    items={projetos.destaques}
                    direction="right"
                    speed="normal"
                    pauseOnHover={true}
                />
                <InfiniteMovingCards
                    items={projetos.todos}
                    direction="left"
                    speed="slow"
                    pauseOnHover={true}
                    className="hidden lg:block"
                />
                <Link
                    href="/projetos"
                    target="_self"
                    className="bg-[#713aed] rounded-2xl px-7 py-2 text-sm font-bold mx-auto inline"
                >
                    Ver todos os projetos
                </Link>
                <Curriculo tecnologias={tecnologias.todas} />
            </Container>
        </div>
    )
}
