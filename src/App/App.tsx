import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import { KEYS } from './keyboard';



export default function App () {
	const handleKeydown = (ev: KeyboardEvent) => {
		const date = new Date();
		const key = KEYS.find(key => key.keynames.includes(ev.key));
		if (key) {
			console.log(`You pressed '${ev.key}' [${key.row}, ${key.column}] at ${date.toLocaleTimeString()}`);
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
