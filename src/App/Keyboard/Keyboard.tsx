import { KeyboardKey } from "../data";
import KeyButton from "./KeyButton/KeyButton";



const KEYS = [...Array(40).keys()].map(k => ({
	idx: k,
	row: 1 + Math.floor(k/10),
	column: 1 + (k % 10)
}));

interface KeyboardProps {
	inBuffer: (k: KeyboardKey) => boolean
}

export default function Keyboard ({
	inBuffer
}: KeyboardProps) {
	return (
		<section>
			<section className="max-w-5xl mx-auto px-3 py-12 grid grid-cols-5 lg:grid-cols-10 gap-1">
				{KEYS.map(key => <KeyButton key={key.idx} k={key} inBuffer={inBuffer(key)} />)}
			</section>
		</section>
	);
}
