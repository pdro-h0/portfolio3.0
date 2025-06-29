"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Menu() {
	const caminho = usePathname()

	return (
		<nav className="flex gap-6">
			<MenuItem href="/" selecionado={caminho === "/"}>
				Início
			</MenuItem>
			<MenuItem href="/projetos" selecionado={caminho.startsWith("/projetos")}>
				Projetos
			</MenuItem>
			<MenuItem
				href="https://www.linkedin.com/in/pedro-h-b7547588/"
				selecionado={false}
				novaAba={true}
			>
				Contato
			</MenuItem>
			<MenuItem
				href="https://github.com/pdro-h0"
				selecionado={false}
				novaAba={true}
			>
				Github
			</MenuItem>
		</nav>
	)
}

function MenuItem(props: {
	href: string
	children: React.ReactNode
	selecionado: boolean
	novaAba?: boolean
}) {
	return (
		<Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
			<span
				className={`
                    flex items-center gap-2 text-sm border-[#713aed] hover:text-white
                    ${props.selecionado ? "border-b-4 text-white" : "text-zinc-300"}    
                `}
			>
				{props.children}
			</span>
		</Link>
	)
}
