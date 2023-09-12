import "../sass/header.scss";

const Header = () => {
	return (
		<header>
			<a href="/" className="logo-rimac">
				<img src="/assets/logo-rimac.svg" />
			</a>
			<div className="info-doubts">
				<span className="any-doubt">¿Tienes alguna duda?</span>
				<a href="tel:(01) 411 6001" className="by-calling">
					<img src="/assets/icon-phone.svg" alt="icon-phone" />
					<span className="is-desktop">(01) 411 6001</span>
					<span className="is-mobile">Llámanos</span>
				</a>
			</div>
		</header>
	);
};

export default Header;
