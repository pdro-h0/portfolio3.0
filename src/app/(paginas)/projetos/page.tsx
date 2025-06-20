import Projetos from "@/components/projetos/Projetos";
import Container from "@/components/shared/Container";
import { obterProjetos } from "@/functions/projetos";
import Cabecalho from "@/components/shared/Cabecalho"



export default async function ProjetosPage() {
    const projetos = await obterProjetos()
    return (
        <>
            <Cabecalho />
            <Container className="py-16 flex flex-col items-center gap-10">
                <Projetos titulo="Destaque" lista={projetos.destaques} />
                <Projetos titulo="Frontend" lista={projetos.frontend} />
                <Projetos titulo="Backend" lista={projetos.backend} />
            </Container>
        </>
    )
}