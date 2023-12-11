


interface KeyButtonProps {
	row: number,
	column: number
}

export default function KeyButton ({
	row, column
}: KeyButtonProps) {
	return (
		<button className="bg-zinc-950 px-2 lg:py-4 xl:py-5 border border-zinc-800 rounded cursor-pointer hover:border-red-600">
			<h4>{row}, {column}</h4>
		</button>
	);
}
