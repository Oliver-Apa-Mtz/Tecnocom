import { Link } from 'react-router-dom';
import './footer.css'
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
	return (
		<footer className="footer w-screen bg-white">
			<div className="max-w-[1360px] mx-auto px-[20px] py-14 flex justify-between">
				<div>
					<Link to="/">
						<img className='h-[55px]' src={Logo} alt="" loading="lazy" />
					</Link>
				</div>
				<div className='w-[310px] ml-[40px]'>
					<h4 className="font-semibold mb-2 text-principal text-[20px]">Contacto</h4>
					<p className='font-light text-purple text-[18px] mb-2 relative pl-8'>
						<img src={IconPin} alt="" className='absolute top-1 left-0' />
						Mazatlán, Sinaloa.<br />
						Lunes a Viernes<br />
						9:00 – 18:00 hrs
					</p>
					<p className='font-light text-purple text-[18px] mb-2 relative pl-8'>
						<img src={IconPhone} alt="" className='absolute top-1 left-0' />
						+52 (667) 123-4567
					</p>
					<p className='font-light text-purple text-[18px] mb-2 relative pl-8'>
						<img src={IconMail} alt="" className='absolute top-1 left-0' />
						contacto@tecnocommzt.com
					</p>
				</div>
				<div className='w-[180px]'>
					<h4 className="font-semibold mb-2 text-principal text-[20px]">Links</h4>
					<Link to="/" className="font-light text-purple text-[18px] mb-2 block hover:text-principal">Inicio</Link>
					<Link to="/" className="font-light text-purple text-[18px] mb-2 block hover:text-principal">Nosotros</Link>
					<Link to="/" className="font-light text-purple text-[18px] mb-2 block hover:text-principal">Productos y servicios</Link>
				</div>
				<div className='w-[170px] pt-[38px] ml-[20px]'>
					<Link to="/" className="font-light text-purple text-[18px] mb-2 block hover:text-principal">Socios</Link>
					<Link to="/" className="font-light text-purple text-[18px] mb-2 block hover:text-principal">¿Cómo Trabajamos?</Link>
					<Link to="/" className="font-light text-purple text-[18px] mb-2 block hover:text-principal">Casos de exito</Link>
				</div>
				<div className='flex justify-end gap-5 ml-[40px]'>
					<Link to="/" className="">
						<img src={Icon1} alt="" />
					</Link>
					<Link to="/" className="">
						<img src={Icon2} alt="" />
					</Link>
					<Link to="/" className="">
						<img src={Icon3} alt="" />
					</Link>
					<Link to="/" className="">
						<img src={Icon4} alt="" />
					</Link>
				</div>
			</div>
			<div className='max-w-[1360px] mx-auto px-[20px] pb-10 text-center relative'>
				<p className='text-[16px]'><span className='text-purple font-light'>© 2025</span> <span className='text-principal font-semibold'>Tecnocom MZT</span></p>
				<div className='absolute right-0 top-0 w-[48px] h-[48px] rounded-full bg-principal flex justify-center items-center cursor-pointer hover:bg-secundario transition-all duration-300'>
					<img src={IconArrow} alt="" />
				</div>
			</div>
		</footer>
	)
}

export default Footer