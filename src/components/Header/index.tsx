import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/img/Logo.png';
import Menu from '../../assets/img/menu.png';

const Header = () => {
	const location = useLocation();
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);
	const [menuMovil, setMenuMovil] = useState(false);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 100;
		setIsHeaderFixed(scrollPosition > headerHeight);
	};

	const handleResize = () => {
		const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
		if (isLargeScreen) {
			setMenuMovil(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, []);


	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`header w-screen bg-white ${isHeaderFixed ? 'fixed' : ''} ${menuMovil ? 'header--active' : ''}`}>
			<div className="max-w-[1360px] mx-auto px-[20px] flex items-center justify-between h-full">
				<div>
					<Link to="/">
						<img className='h-[40px] sm:h-[55px]' src={Logo} alt="" loading="lazy" />
					</Link>
				</div>
				<nav className="hidden lg:flex gap-4 xl:gap-6 text-sm text-text">
					<Link to="/" className={`header__nav__item poppins-regular hover:text-principal ${location.pathname === '/' ? 'active' : ''}`}>Inicio</Link>
					<Link to="/nosotros" className={`header__nav__item poppins-regular hover:text-principal ${location.pathname === '/nosotros' ? 'active' : ''}`}>Nosotros</Link>
					<Link to="/productos-servicios" className={`header__nav__item poppins-regular hover:text-principal ${location.pathname === '/productos-servicios' || location.pathname === '/producto-detalle' ? 'active' : ''}`}>Productos y servicios</Link>
					<Link to="/industrias" className={`header__nav__item poppins-regular hover:text-principal ${location.pathname === '/industrias' ? 'active' : ''}`}>Industrias</Link>
					<Link to="/socios" className={`header__nav__item poppins-regular hover:text-principal ${location.pathname === '/socios' ? 'active' : ''}`}>Socios</Link>
					<Link to="/como-trabajamos" className={`header__nav__item poppins-regular hover:text-principal ${location.pathname === '/como-trabajamos' ? 'active' : ''}`}>¿Cómo Trabajamos?</Link>
					<Link to="/contacto" className={`header__nav__item poppins-regular hover:text-principal ${location.pathname === '/contacto' ? 'active' : ''}`}>Contáctanos</Link>
				</nav>
				<button className="lg:hidden">
					<img className='h-[30px] cursor-pointer' src={Menu} alt="" loading="lazy" onClick={() => setMenuMovil(!menuMovil)} />
				</button>
				{menuMovil && (
					<div className='header__nav__movil bg-white' onClick={() => setMenuMovil(false)}>
						<Link to="/nosotros" className="header__nav__item__movil text-left w-full block p-2 text-sm poppins-regular border-b border-secundario hover:bg-secundario hover:text-black">Nosotros</Link>
						<Link to="/productos-servicios" className="header__nav__item__movil text-left w-full block p-2 text-sm poppins-regular border-b border-secundario hover:bg-secundario hover:text-black ">Productos y servicios</Link>
						<Link to="/industrias" className="header__nav__item__movil text-left w-full block p-2 text-sm poppins-regular border-b border-secundario hover:bg-secundario hover:text-black">Industrias</Link>
						<Link to="/socios" className="header__nav__item__movil text-left w-full block p-2 text-sm poppins-regular border-b border-secundario hover:bg-secundario hover:text-black">Socios</Link>
						<Link to="/como-trabajamos" className="header__nav__item__movil text-left w-full block p-2 text-sm poppins-regular border-b border-secundario hover:bg-secundario hover:text-black">¿Cómo Trabajamos?</Link>
						<Link to="/contacto" className="header__nav__item__movil text-left w-full block p-2 text-sm poppins-regular border-b border-secundario hover:bg-secundario hover:text-black">Contáctanos</Link>
					</div>
				)}
			</div>
		</header >

	)
}

export default Header