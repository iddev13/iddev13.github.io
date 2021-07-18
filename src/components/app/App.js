import { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';
import './App.css';



const App = () => {

	let [active, setActive] = useState(false)

	useEffect(() => {
		const appActive = () => {
			setActive(true);
		}
		appActive();
	}, [])

	return (
		<div className={`App ${active ? 'active' : ''}`}>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default App;