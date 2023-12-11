import Keyboard from './Keyboard/Keyboard';



interface MainProps {
	//
}

export default function Main ({}: MainProps) {
	return (
		<main className="min-h-screen">
			<Keyboard />
		</main>
	);
}
