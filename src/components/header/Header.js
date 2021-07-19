import './Header.css';

const Header = (props) => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<div className="header__logo">
						<a href="/">LOGO</a>
					</div>
					<div className="header__mode">
						<button onClick={() => { props.themeToggler() }}>Theme</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;