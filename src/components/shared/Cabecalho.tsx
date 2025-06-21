import Container from "./Container"
import Link from "next/link"
import Menu from "./Menu"
import { DropdownMenu } from "radix-ui"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"


export default function Cabecalho() {
	return (
		<>
			<header className="hidden lg:w-full lg:flex lg:items-center lg:h-16 lg:bg-transparent/50">
				<Container className="flex-1 flex justify-center sm:justify-between items-center">
					<div className="flex items-center gap-10">
						<Menu />
					</div>
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
				</Container>
			</header>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger className="lg:hidden" asChild>
					<button className="IconButton absolute right-3.5 top-3.5 bg-[#101016] rounded-md" aria-label="Customise options">
						<HamburgerMenuIcon className="size-6" />
					</button>
				</DropdownMenu.Trigger>

				<DropdownMenu.Portal>
					<DropdownMenu.Content className="flex flex-col bg-[#101016]/80 w-screen h-screen py-2 px-4 z-50 gap-6 justify-center items-center">
						<DropdownMenu.Item className="flex flex-col">
							<Menu />
						</DropdownMenu.Item>
						<DropdownMenu.Item>
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
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</>
	)
}
