import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { playTone } from './music';
import { getKeyDetails } from 'keyxy';
import Keyboard from './Keyboard/Keyboard';
import { KeyboardKey, KeyboardKeyPress } from './data';



export default function App () {
	const [keysBuffer, setKeysBuffer] = React.useState<KeyboardKeyPress[]>([]);
	const inBuffer = (key: KeyboardKey): boolean => {
		const k = keysBuffer.find(k => (key.row === k.row) && (key.column === k.column));
		return k ? true : false;
	};

	const handleKeydown = (ev: KeyboardEvent) => {
		const key = getKeyDetails(ev.key);

		if (key) {
			const {row, column} = key;
			const time = Date.now();
			setKeysBuffer(keys => [...keys, { row, column, time }]);

			const freq = 100 + (row * 100) + (column * 5);
			console.log(`You pressed '${ev.key}' [${row}, ${column}] => ${freq}Hz`);
			playTone(freq);
		}
	};

	React.useEffect(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	}, []);

	return (
		<div className="bg-zinc-900 text-white">
			<Header />
			<main className="min-h-screen">
				<Keyboard {...{inBuffer}} />
			</main>
			<Footer />
		</div>
	);
}
