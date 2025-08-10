import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/img/Logo.png';

const Header = () => {
	return (
		<header className="header w-screen bg-white">
			<div className="max-w-[1360px] mx-auto px-[20px] flex items-center justify-between h-full">
				<div>
					<Link to="/">
						<img className='h-[55px]' src={Logo} alt="" loading="lazy" />
					</Link>
				</div>
				<nav className="hidden md:flex gap-6 text-sm font-medium text-text">
					<Link to="/" className="header__nav__item hover:text-principal">Inicio</Link>
					<Link to="/" className="header__nav__item hover:text-principal">Nosotros</Link>
					<Link to="/productos-servicios" className="header__nav__item hover:text-principal">Productos y servicios</Link>
					<Link to="/" className="header__nav__item hover:text-principal">Industrias</Link>
					<Link to="/" className="header__nav__item hover:text-principal">Socios</Link>
					<Link to="/" className="header__nav__item hover:text-principal">¿Cómo Trabajamos?</Link>
					<Link to="/" className="header__nav__item hover:text-principal">Contáctanos</Link>
				</nav>
				<button className="md:hidden">
					<svg className="w-6 h-6" fill="none" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
				</button>
			</div>
		</header>

	)
}

export default Header