import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import { playTone } from './music';
import { getKeyDetails } from 'keyxy';



export default function App () {
	const handleKeydown = (ev: KeyboardEvent) => {
		const key = getKeyDetails(ev.key);

		if (key) {
			const {row, column} = key;
			const freq = 100 + (row * 100) + (column * 5);
			console.log(`You pressed '${ev.key}' [${row}, ${column}] at ${new Date().toLocaleTimeString()}`);
			console.log(`Playing sound at ${freq}Hz`);
			playTone(freq);
		}
	};

	React.useEffect(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	}, []);

	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
