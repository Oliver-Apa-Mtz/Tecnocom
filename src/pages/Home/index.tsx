
import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

import Logo from '../../assets/img/Logo.png';
import BannerHome from '../../assets/img/banner-home.png';

import Icon1 from '../../assets/img/icon-1.svg';
import Icon2 from '../../assets/img/icon-2.svg';
import Icon3 from '../../assets/img/icon-3.svg';

import Logo1 from '../../assets/img/logo-1.png';
import Logo2 from '../../assets/img/logo-2.png';
import Logo3 from '../../assets/img/logo-3.png';
import Logo4 from '../../assets/img/logo-4.png';
import Logo5 from '../../assets/img/logo-5.png';
import Logo6 from '../../assets/img/logo-6.png';
import Logo7 from '../../assets/img/logo-7.png';
import Logo8 from '../../assets/img/logo-8.png';
import Logo9 from '../../assets/img/logo-9.png';

import Image1 from '../../assets/img/img-1.png';

import Slider1 from '../../assets/img/Slider-1.png';
import Slider2 from '../../assets/img/Slider-2.png';
import Slider3 from '../../assets/img/Slider-3.png';
import Slider4 from '../../assets/img/Slider-4.png';

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToScroll: 1,
	slidesToShow: 1,
};

const Home = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const [isVisibleBanner3, setIsVisibleBanner3] = useState(false);
	const [isVisibleBanner4, setIsVisibleBanner4] = useState(false);
	const [isVisibleBanner5, setIsVisibleBanner5] = useState(false);
	const isMobile = window.innerWidth <= 1023;

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 200;
		setIsVisibleBanner2(scrollPosition > (headerHeight));
		setIsVisibleBanner3(scrollPosition > (headerHeight + 700));
		setIsVisibleBanner4(scrollPosition > (headerHeight + 700));
		setIsVisibleBanner5(scrollPosition > (headerHeight + 1400));
	};
	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		transform: isVisibleBanner2 ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner3 = useSpring({
		opacity: isVisibleBanner3 ? 1 : 0,
		transform: isVisibleBanner3 ? 'translateX(0)' : 'translateX(-50px)',
	});
	const animationPropsBanner4 = useSpring({
		opacity: isVisibleBanner4 ? 1 : 0,
		transform: isVisibleBanner4 ? 'translateX(0)' : 'translateX(50px)',
	});
	const animationPropsBanner5 = useSpring({
		opacity: isVisibleBanner5 ? 1 : 0,
		transform: isVisibleBanner5 ? 'translateY(0)' : 'translateY(50px)',
	});

	useEffect(() => {
		setIsVisible(true);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Layout>
			{
				<div>
					<section className="w-full md:h-[600px] lg:h-[1020px] p-8 md:p-20 bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${BannerHome})` }}>
						<div className="w-full max-w-[1360px] mx-auto">
							<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
								<div className="text-center">
									<h1 className="text-[30px] md:text-[40px] lg:text-[50px] poppins-semibold text-white w-full md:w-[750px] mx-auto mb-8 md:leading-[50px] lg:leading-[60px]">
										<span className="text-secundario">Infraestructura Tecnológica</span><br></br> que sostiene tu negocio
									</h1>
									<p className="text-white albert-sans-300 text-[20px]">
										Redes de alta disponibilidad, centros de datos
										robustos y soluciones de conectividad para que
										nunca detengas tu operación.
									</p>
									<div className='flex justify-center mt-4'>
										<Link to="/contacto" className='button button--primary poppins-regular'>Contáctanos</Link>
									</div>
								</div>
							</animated.div>
						</div>
					</section>

					<section className="w-full -mt-[30px] md:-mt-[80px]">
						<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
							<div className="max-w-[1360px] mx-auto px-[20px] flex justify-center md:gap-8 lg:gap-16 text-center flex-wrap lg:flex-nowrap">
								<div className='w-[80%] sm:w-[60%] lg:w-full md:max-w-[300px] lg:max-w-[360px] h-[306px] rounded-2xl shadow-xl flex items-center justify-center px-5 lg:px-10 py-6 bg-white mb-10'>
									<div>
										<img src={Icon1} className="w-[60px] lg:w-[80px] mx-auto mb-2" />
										<h3 className="text-principal text-[20px] poppins-semibold mb-2">Cobertura Nacional:</h3>
										<p className="text-text text-[18px] px-0 lg:px-7 albert-sans-300">Soluciones optimizadas para cada región.</p>
									</div>
								</div>
								<div className='w-[80%] sm:w-[60%] lg:w-full md:max-w-[300px] lg:max-w-[360px] h-[306px] rounded-2xl shadow-xl flex items-center justify-center px-5 lg:px-10 py-6 bg-white mb-10'>
									<div>
										<img src={Icon2} className="w-[60px] lg:w-[80px] mx-auto mb-2" />
										<h3 className="text-principal text-[20px] poppins-semibold mb-2">Expertise Multisectorial</h3>
										<p className="text-text text-[18px] albert-sans-300">Experiencia en salud, gobierno, industria y comercio.</p>
									</div>
								</div>
								<div className='w-[80%] sm:w-[60%] lg:w-full md:max-w-[300px] lg:max-w-[360px] h-[306px] rounded-2xl shadow-xl flex items-center justify-center px-5 lg:px-10 py-6 bg-white'>
									<div>
										<img src={Icon3} className="w-[60px] lg:w-[80px] mx-auto mb-2" />
										<h3 className="text-principal text-[20px] poppins-semibold mb-2">Atención Personalizada:</h3>
										<p className="text-text text-[18px] albert-sans-300">Asesoría técnica 24/7 adaptada a tu operación.</p>
									</div>
								</div>
							</div>
						</animated.div>
					</section>

					<section className="w-full mt-20 mb-10">
						<div className="max-w-[1360px] mx-auto px-[20px] flex flex-wrap items-center justify-center gap-8">
							<img src={Logo1} className="h-14" />
							<img src={Logo2} className="h-14" />
							<img src={Logo3} className="h-14" />
							<img src={Logo4} className="h-14" />
							<img src={Logo5} className="h-14" />
							<img src={Logo6} className="h-14" />
							<img src={Logo7} className="h-14" />
							<img src={Logo8} className="h-14" />
							<img src={Logo9} className="h-14" />
						</div>
					</section>

					<section className="w-full bg-gray">
						<div className="max-w-[1360px] mx-auto px-[20px] py-10 flex flex-col md:flex-row items-center gap-12">
							<div className="flex-1 text-center md:text-left">
								<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="animated-element">
									<img className='h-[55px] mb-6 mx-auto md:mx-0' src={Logo} alt="" loading="lazy" />
									<h2 className="text-2xl md:text-3xl poppins-semibold text-principal mb-4">Garantizamos estabilidad y escalabilidad en cada proyecto.</h2>
									<p className="text-text text-[18px] albert-sans-300">
										Nuestra experiencia abarca desde el diseño
										de redes empresariales hasta sistemas
										especializados de seguridad y automatización
										industrial.
									</p>
									<div className='mt-4 flex justify-center md:justify-start'>
										<Link to="/productos-servicios" className='button button--secondary block min-w-[200px] poppins-regular'>Ver más</Link>
									</div>
								</animated.div>
							</div>
							<div className="flex-1">
								<animated.div style={!isMobile ? animationPropsBanner4 : {}} className="animated-element">
									<img src={Image1} alt="Engineer" className='max-w-[280px] sm:max-w-[400px] md:max-w-full' />
								</animated.div>
							</div>
						</div>
					</section>

					<section className='w-full'>
						<div className="w-full max-w-[1360px] mx-auto px-[20px] pt-10 text-center">
							<h3 className="text-[30px] md:text-[40px] lg:text-[50px] poppins-semibold text-secundario mb-4">Explora nuestros servicios</h3>
							<p className="text-principal text-[24px] lg:text-[34px] poppins-semibold px-[20px] lg:px-[250px]">
								Cada servicio está diseñado para resolver
								necesidades reales de forma clara y sencilla:
							</p>
						</div>
						<div className='p-6 max-w-[1580px] mx-auto'>
							<animated.div style={!isMobile ? animationPropsBanner5 : {}} className="animated-element">
								<Slider {...settings}>
									<div className="w-full" style={{ outline: 'none' }}>
										<div className="px-8 py-4 min-h-[116px] lg:min-h-max">
											<h4 className="text-[20px] md:text-[24px] lg:text-[34px] poppins-semibold text-principal">Hogar</h4>
											<p className="text-[18px] md:text-[22px] poppins-regular">Explora lo que podemos hacer por tu vida diaria.</p>
										</div>
										<img src={Slider1} alt="" className='sm:h-[300px] md:h-[500px] lg:h-[800px]' style={{ width: '100%' }} />
									</div>
									<div className="w-full" style={{ outline: 'none' }}>
										<div className="px-8 py-4 min-h-[116px] lg:min-h-max">
											<h4 className="text-[20px] md:text-[24px] lg:text-[34px] poppins-semibold text-principal">Hospitales</h4>
											<p className="text-[18px] md:text-[22px] poppins-regular">La tecnología a favor de tu salud y tranquilidad.</p>
										</div>
										<img src={Slider2} alt="" className='sm:h-[300px] md:h-[500px] lg:h-[800px]' style={{ width: '100%' }} />
									</div>
									<div className="w-full" style={{ outline: 'none' }}>
										<div className="px-8 py-4 min-h-[116px] lg:min-h-max">
											<h4 className="text-[20px] md:text-[24px] lg:text-[34px] poppins-semibold text-principal">Hotelería</h4>
											<p className="text-[18px] md:text-[22px] poppins-regular">Mejora la experiencia de tus huespedes y la rapidez en el servicio.</p>
										</div>
										<img src={Slider3} alt="" className='sm:h-[300px] md:h-[500px] lg:h-[800px]' style={{ width: '100%' }} />
									</div>
									<div className="w-full" style={{ outline: 'none' }}>
										<div className="px-8 py-4 min-h-[116px] lg:min-h-max">
											<h4 className="text-[20px] md:text-[24px] lg:text-[34px] poppins-semibold text-principal">Industria</h4>
											<p className="text-[18px] md:text-[22px] poppins-regular">Eficienta la producción manteniendo la seguridad y comunicación al máximo.</p>
										</div>
										<img src={Slider4} alt="" className='sm:h-[300px] md:h-[500px] lg:h-[800px]' style={{ width: '100%' }} />
									</div>
								</Slider>
							</animated.div>
						</div>
					</section>
				</div>
			}
		</Layout>
	)
}

export default Home