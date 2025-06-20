import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
	title: "Portfolio de Desenvolvedor Full-Stack Junior: Projetos Criativos e Soluções Inovadoras",
	description: "Explore o portfolio de um desenvolvedor full-stack junior especializado em Next.js, React.js, Tailwind, TypeScript, Express, Fastify, Prisma, PostgreSQL, Vitest, e Node.js.",
	icons: {
		icon: "https://img.icons8.com/emoji/32/000000/man-curly-hair-dark-skin-tone.png"
	}

}

const fonte = Montserrat({
	subsets: ["latin"],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${fonte.className} antialiased`}>{children}</body>
		</html>
	)
}
