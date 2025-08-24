import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Icon1 from '../../assets/img/icon-in.svg';
import Icon2 from '../../assets/img/icon-fb.svg';
import Icon3 from '../../assets/img/icon-x.svg';
import Icon4 from '../../assets/img/icon-ig.svg';

import IconPin from '../../assets/img/icon-pin.svg';
import IconPhone from '../../assets/img/icon-phone.svg';
import IconMail from '../../assets/img/icon-mail.svg';
import IconArrow from '../../assets/img/arrow-top.svg';

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className="footer w-screen bg-white">
			<div className="w-full max-w-[1360px] mx-auto px-[20px] py-8 lg:py-14 lg:flex justify-between">
				<div className='w-full lg:w-auto'>
					<Link to="/">
						<img className='h-[55px] mx-auto lg:mx-0 mb-8 lg:mb-0' src={Logo} alt="" loading="lazy" />
					</Link>
				</div>
				<div className='w-[280px] md:w-[300px] mx-auto lg:mx-0 ml-auto lg:ml-[40px]'>
					<h4 className="mb-2 text-principal text-[20px] text-center lg:text-left poppins-semibold">Contacto</h4>
					<Link to="https://maps.app.goo.gl/h5kXSZp9TJ9Je4fE9" target="_blank">
						<p className='albert-sans-300 text-purple text-[18px] mb-2 relative pl-8 hover:text-principal'>
							<img src={IconPin} alt="" className='absolute top-1 left-0' />
							Mazatlán, Sinaloa.<br />
							Lunes a Viernes<br />
							9:00 – 18:00 hrs
						</p>
					</Link>
					<a href="tel:+526671234567">
						<p className='albert-sans-300 text-purple text-[18px] mb-2 relative pl-8 hover:text-principal'>
							<img src={IconPhone} alt="" className='absolute top-1 left-0' />
							+52 (667) 123-4567
						</p>
					</a>
					<a href="mailto:contacto@tecnocommzt.com">
						<p className='albert-sans-300 text-purple text-[18px] mb-2 relative pl-8 hover:text-principal'>
							<img src={IconMail} alt="" className='absolute top-1 left-0' />
							contacto@tecnocommzt.com
						</p>
					</a>
				</div>
				<div className='w-[280px] md:w-[300px] lg:w-[180px] mx-auto lg:mx-0 text-center lg:text-left pt-4 lg:pt-0'>
					<h4 className="mb-2 text-principal text-[20px] poppins-semibold">Links</h4>
					<Link to="/" className="albert-sans-300 text-purple text-[18px] mb-2 block hover:text-principal">Inicio</Link>
					<Link to="/nosotros" className="albert-sans-300 text-purple text-[18px] mb-2 block hover:text-principal">Nosotros</Link>
					<Link to="/productos-servicios" className="albert-sans-300 text-purple text-[18px] mb-2 block hover:text-principal">Productos y servicios</Link>
				</div>
				<div className='w-[280px] md:w-[300px] lg:w-[180px] mx-auto lg:mx-0 pt-0 lg:pt-[38px] ml-auto lg:ml-[20px] text-center lg:text-left'>
					<Link to="/socios" className="albert-sans-300 text-purple text-[18px] mb-2 block hover:text-principal">Socios</Link>
					<Link to="/como-trabajamos" className="albert-sans-300 text-purple text-[18px] mb-2 block hover:text-principal">¿Cómo Trabajamos?</Link>
					<Link to="/contacto" className="albert-sans-300 text-purple text-[18px] mb-2 block hover:text-principal">Contacto</Link>
				</div>
				<div className='flex justify-center lg:justify-end gap-5 ml-0 lg:ml-[40px] pt-4 lg:pt-0'>
					<Link to="/" className="hover:grayscale transition-all duration-300">
						<img src={Icon1} alt="" />
					</Link>
					<Link to="/" className="hover:grayscale transition-all duration-300">
						<img src={Icon2} alt="" />
					</Link>
					<Link to="/" className="hover:grayscale transition-all duration-300">
						<img src={Icon3} alt="" />
					</Link>
					<Link to="/" className="hover:grayscale transition-all duration-300">
						<img src={Icon4} alt="" />
					</Link>
				</div>
			</div>
			<div className='max-w-[1360px] mx-auto px-[20px] pb-10 text-center relative'>
				<p className='text-[16px]'><span className='text-purple albert-sans-300'>© 2025</span> <span className='text-principal poppins-semibold'>Tecnocom MZT</span></p>
				<div onClick={scrollToTop} className='absolute right-2 top-0 w-[48px] h-[48px] rounded-full bg-principal flex justify-center items-center cursor-pointer hover:bg-secundario transition-all duration-300'>
					<img src={IconArrow} alt="" />
				</div>
			</div>
		</footer>
	)
}

export default Footer