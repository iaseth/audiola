import { KeyboardKey } from "../../data";



interface KeyButtonProps {
	k: KeyboardKey,
	inBuffer: boolean
}

export default function KeyButton ({
	k, inBuffer
}: KeyButtonProps) {
	return (
		<button className="relative bg-zinc-950 px-2 py-4 lg::py-5 xl:py-6 border border-zinc-800 rounded cursor-pointer hover:border-red-600">
			<div className="absolute top-1 right-1 bg-green-500 p-1 rounded shadow" hidden={!inBuffer}></div>
			<h4>{k.row}, {k.column}</h4>
		</button>
	);
}
