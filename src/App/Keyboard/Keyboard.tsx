import KeyButton from "./KeyButton/KeyButton";



interface KeyboardProps {}

export default function Keyboard ({}: KeyboardProps) {
	const keys = [...Array(40).keys()].map(k => ({
		idx: k,
		row: 1 + Math.floor(k/10),
		column: 1 + (k % 10)
	}));

	return (
		<section>
			<section className="max-w-5xl mx-auto px-3 py-12 grid grid-cols-5 lg:grid-cols-10 gap-1">
				{keys.map(key => <KeyButton key={key.idx} {...key} />)}
			</section>
		</section>
	);
}
