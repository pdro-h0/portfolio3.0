import Container from "./Container"
import Link from "next/link"
import Menu from "./Menu"

export default function Cabecalho() {
	return (
		<header className="w-full flex items-center h-16 bg-transparent/50">
			<Container className="flex-1 flex justify-center sm:justify-between items-center">
				<div className="flex items-center gap-10">
					<Menu />
				</div>
				<div className="hidden sm:flex items-center">
					<Link
						href="/curriculo.pdf"
						rel="noopener noreferrer"
						download
						type="application/pdf"
						target="_blank"
						className="bg-[#713aed] rounded-full px-7 py-1 text-sm font-bold"
					>
						Download CV
					</Link>
				</div>
			</Container>
		</header>
	)
}
