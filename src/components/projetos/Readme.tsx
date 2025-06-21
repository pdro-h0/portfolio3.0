import ConteudoMD from "../shared/ConteudoMD"

export interface ReadmeProps {
	markdown: string
}

export default function Readme(props: ReadmeProps) {
	return (
		<div className="flex flex-col items-stretch w-full lg:max-w-7xl p-6 bg-[#101016] border border-zinc-800 rounded-2xl">
			<div className="prose prose-zinc prose-invert break-words" style={{ maxWidth: "100%" }}>
				<ConteudoMD markdown={props.markdown} />
			</div>
		</div>
	)
}
