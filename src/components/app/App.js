import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../../theme';
import './App.css';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';

const StyledApp = styled.div`
	color: ${(props) => props.theme.fontColor};
`;

const App = () => {
	const [theme, setTheme] = useState('light');
	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	}

	const [active, setActive] = useState(false);
	useEffect(() => {
		const appActive = () => {
			setActive(true);
		}
		appActive();
	}, [])

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme} >
			<GlobalStyles />
			<StyledApp>
				<div className={`App ${active ? 'active' : ''}`}>
					<Header themeToggler={themeToggler} />
					<Main />
					<Footer />
				</div>
			</StyledApp>
		</ThemeProvider >

	)
}

export default App;