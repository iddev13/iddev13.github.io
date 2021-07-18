import './Header.css';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<div className="header__logo">
						<a href="/">LOGO</a>
					</div>
					<div className="header__mode">
						<button>Theme</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;