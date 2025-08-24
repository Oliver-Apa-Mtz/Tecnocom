import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Layout from '../../components/Layout';
import Form from '../../components/Form';
import { Link } from 'react-router-dom';

import BannerAbout from '../../assets/img/banner-about.webp';
import imgAbout1 from '../../assets/img/about-1.webp';
import imgAbout2 from '../../assets/img/about-2.webp';
import imgAbout3 from '../../assets/img/about-3.webp';
import Logo1 from '../../assets/img/logo-10.png';
import Logo2 from '../../assets/img/logo-11.png';
import Logo3 from '../../assets/img/logo-12.png';

const About = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const [isVisibleBanner3, setIsVisibleBanner3] = useState(false);
	const [isVisibleBanner4, setIsVisibleBanner4] = useState(false);
	const [isVisibleBanner5, setIsVisibleBanner5] = useState(false);
	const [isVisibleBanner6, setIsVisibleBanner6] = useState(false);
	const [isVisibleBanner7, setIsVisibleBanner7] = useState(false);
	const [isVisibleBanner8, setIsVisibleBanner8] = useState(false);
	const [isVisibleBanner9, setIsVisibleBanner9] = useState(false);
	const isMobile = window.innerWidth <= 1023;

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 200;
		if (scrollPosition > (headerHeight + 300)) {
			setIsVisibleBanner2(true);
			setTimeout(() => {
				setIsVisibleBanner3(true);
			}, 500);
		} else {
			setIsVisibleBanner2(false);
			setIsVisibleBanner3(false);
		}
		if (scrollPosition > (headerHeight + 900)) {
			setIsVisibleBanner4(true);
			setTimeout(() => {
				setIsVisibleBanner5(true);
			}, 500);
		} else {
			setIsVisibleBanner4(false);
			setIsVisibleBanner5(false);
		}
		if (scrollPosition > (headerHeight + 1500)) {
			setIsVisibleBanner6(true);
			setTimeout(() => {
				setIsVisibleBanner7(true);
			}, 500);
			setTimeout(() => {
				setIsVisibleBanner8(true);
			}, 1000);
			setTimeout(() => {
				setIsVisibleBanner9(true);
			}, 1500);
		} else {
			setIsVisibleBanner6(false);
			setIsVisibleBanner7(false);
			setIsVisibleBanner8(false);
			setIsVisibleBanner9(false);
		}
	};
	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		transform: isVisibleBanner2 ? 'translateX(0)' : 'translateX(-50px)',
	});
	const animationPropsBanner3 = useSpring({
		opacity: isVisibleBanner3 ? 1 : 0,
		transform: isVisibleBanner3 ? 'translateX(0)' : 'translateX(50px)',
	});
	const animationPropsBanner4 = useSpring({
		opacity: isVisibleBanner4 ? 1 : 0,
		transform: isVisibleBanner4 ? 'translateX(0)' : 'translateX(-50px)',
	});
	const animationPropsBanner5 = useSpring({
		opacity: isVisibleBanner5 ? 1 : 0,
		transform: isVisibleBanner5 ? 'translateX(0)' : 'translateX(50px)',
	});
	const animationPropsBanner6 = useSpring({
		opacity: isVisibleBanner6 ? 1 : 0,
		transform: isVisibleBanner6 ? 'translateX(0)' : 'translateX(-50px)',
	});
	const animationPropsBanner7 = useSpring({
		opacity: isVisibleBanner7 ? 1 : 0,
		transform: isVisibleBanner7 ? 'translateX(0)' : 'translateX(50px)',
	});
	const animationPropsBanner8 = useSpring({
		opacity: isVisibleBanner8 ? 1 : 0,
		transform: isVisibleBanner8 ? 'translateX(0)' : 'translateX(50px)',
	});
	const animationPropsBanner9 = useSpring({
		opacity: isVisibleBanner9 ? 1 : 0,
		transform: isVisibleBanner9 ? 'translateX(0)' : 'translateX(50px)',
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
					<section className="w-full h-[600px] p-8 md:p-20 bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${BannerAbout})` }}>
						<div className="w-full max-w-[1360px] mx-auto">
							<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
								<div className="text-center">
									<h1 className="text-[30px] md:text-[40px] lg:text-[50px] poppins-semibold text-white w-full mx-auto mb-8 md:leading-[50px] lg:leading-[60px]">
										<span className="text-secundario">Nosotros</span><br></br> Impulsa tu empresa con tecnología inteligente
									</h1>
									<p className="text-white font-light text-[20px] albert-sans-300">
										En Tecnocom MZT diseñamos e implementamos
										soluciones de telecomunicaciones y TI a la
										medida de tu operación, garantizando
										conectividad, seguridad y automatización
										con atención personalizada y cobertura nacional.
									</p>
								</div>
							</animated.div>
						</div>
					</section>

					<section className='w-full pt-10 pb-10'>
						<div className="w-full max-w-[1360px] mx-auto px-0 md:px-[20px]">
							<p className="text-principal text-center text-[22px] lg:text-[34px] poppins-semibold px-4">
								En Tecnocom MZT transformamos tu empresa
								mediante la integración de soluciones de
								telecomunicaciones y tecnologías avanzadas.
							</p>
							<div className='my-10'>
								<img src={imgAbout1} alt="En Tecnocom MZT transformamos tu empresa mediante la integración de soluciones de telecomunicaciones y tecnologías avanzadas" />
							</div>
						</div>

						<div className="max-w-[1360px] mx-auto px-[20px] py-10 flex flex-col md:flex-row items-center gap-12 justify-between">
							<div className="flex-1 text-center md:text-left w-full max-w-[566px]">
								<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
									<p className="text-text text-[18px] albert-sans-300">
										<b>Tecnocom MZT</b> es una empresa mexicana con sede en
										Sinaloa y presencia nacional, dedicada a brindar
										servicios integrales de TI y telecomunicaciones.
										Inspirados por modelos de calidad de empresas
										como AT&T México, ofrecemos:
									</p>
									<ul className='my-4 px-4'>
										<li className='text-darkGray list-disc text-[16px] albert-sans-300 mb-2 text-left'><b>Cobertura Nacional:</b> Soluciones optimizadas por región.</li>
										<li className='text-darkGray list-disc text-[16px] albert-sans-300 mb-2 text-left'><b>Expertise Multisector:</b> Salud, gobierno, industria, comercio y más.</li>
										<li className='text-darkGray list-disc text-[16px] albert-sans-300 text-left'><b>Atención técnica:</b> Personalizada 24/7</li>
									</ul>
									<div className='flex justify-center md:justify-start'>
										<Link to="/contacto" className='button button--secondary block min-w-[200px] poppins-regular'>Contáctanos</Link>
									</div>
								</animated.div>
							</div>
							<div className="flex-1 w-full max-w-[648px]">
								<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="animated-element">
									<div className='w-full bg-principal text-white pt-10 pb-6 px-6 md:px-12 text-center md:text-left'>
										<p className='text-[20px] albert-sans-700 mb-8'>Equipo Certificado</p>
										<p className='text-[18px] albert-sans-300'>
											Trabajamos con un equipo <b>certificado</b> en
											tecnologías <b>Cisco, Huawei y Juniper</b> para
											garantizar estabilidad y escalabilidad
											en cada proyecto.
										</p>
										<div className='flex items-center justify-center gap-4 md:gap-12 mt-14'>
											<img src={Logo1} className='w-[42px] md:w-[72px]' alt="Icono Cisco" />
											<img src={Logo2} className='w-[30px] md:w-[50px]' alt="Icono Huawei" />
											<img src={Logo3} className='w-[56px] md:w-[86px]' alt="Icono Juniper" />
										</div>
									</div>
								</animated.div>
							</div>
						</div>
					</section>

					<section className="w-full bg-gray">
						<div className="max-w-[1360px] mx-auto px-[20px] py-10 flex flex-col md:flex-row items-center gap-12">
							<div className="flex-1 text-center md:text-left">
								<animated.div style={!isMobile ? animationPropsBanner4 : {}} className="animated-element">
									<h2 className="text-2xl md:text-3xl poppins-semibold text-principal mb-4">Nuestra Historia</h2>
									<p className="text-text text-[18px] albert-sans-300">
										<b>Desde 2014, Tecnocom MZT</b> ha sentado las bases de su
										presencia en Sinaloa y extendido sus servicios a nivel
										nacional. Nacimos con la misión de cubrir la brecha
										tecnológica de empresas de todos los tamaños.
									</p>
								</animated.div>
							</div>
							<div className="flex-1">
								<animated.div style={!isMobile ? animationPropsBanner5 : {}} className="animated-element">
									<img src={imgAbout2} alt="Desde 2014, Tecnocom MZT ha sentado las bases de su presencia en Sinaloa" className='max-w-[280px] sm:max-w-[400px] md:max-w-full' />
								</animated.div>
							</div>
						</div>
					</section>

					<section className="w-full">
						<div className="max-w-[1360px] mx-auto px-[20px] py-10 flex flex-col lg:flex-row items-center gap-12">
							<animated.div style={!isMobile ? animationPropsBanner6 : {}} className="animated-element w-full md:w-auto">
								<div className='w-full md:w-[534px] lg:w-[410px] xl:w-[534px] h-[500px] md:h-[768px] bg-cover bg-center relative' style={{ backgroundImage: `url(${imgAbout3})` }}>
									<p className='w-[260px] md:w-[278px] text-secundario text-[20px] lg:text-[34px] poppins-semibold absolute bottom-10 left-4 md:left-10 lg:leading-[40px]'>
										creamos infraestructuras a medida
										que potencian tu productividad y
										competitividad.
									</p>
								</div>
							</animated.div>
							<div className='w-full'>
								<animated.div style={!isMobile ? animationPropsBanner7 : {}} className="animated-element w-full">
									<div className='w-full md:flex text-center md:text-left bg-blue items-center gap-8 text-white pt-10 pb-6 px-4 md:px-12 h-auto md:h-[243px] mb-4'>
										<p className="text-2xl md:text-3xl poppins-semibold text-principal mb-4">Misión</p>
										<p className="w-full max-w-[465px] mx-auto md:mx-0 text-text text-[18px] albert-sans-300 mb-4">
											Brindar soluciones tecnológicas innovadoras
											y adaptadas a las necesidades de nuestros
											clientes, asegurando continuidad operativa y
											un retorno de inversión tangible.
										</p>
									</div>
								</animated.div>
								<animated.div style={!isMobile ? animationPropsBanner8 : {}} className="animated-element w-full">
									<div className='w-full md:flex text-center md:text-left bg-blue items-center gap-8 text-white pt-10 pb-6 px-4 md:px-12 h-auto md:h-[243px] mb-4'>
										<p className="text-2xl md:text-3xl poppins-semibold text-principal mb-4">Visión</p>
										<p className="w-full max-w-[465px] mx-auto md:mx-0 text-text text-[18px] albert-sans-300 mb-4">
											Ser la opción predilecta en México para la
											transformación digital, reconocidos por nuestra
											excelencia técnica y compromiso con el éxito de
											cada cliente.
										</p>
									</div>
								</animated.div>
								<animated.div style={!isMobile ? animationPropsBanner9 : {}} className="animated-element w-full">
									<div className='w-full md:flex bg-blue items-center gap-8 text-white pt-10 pb-6 px-4 md:px-12 h-auto md:h-[243px] mb-4'>
										<p className="text-2xl md:text-3xl poppins-semibold text-principal mb-4 text-center md:text-left">Valores</p>
										<div className='px-8'>
											<ul>
												<li className='text-darkGray list-disc text-[16px] albert-sans-300 mb-2'><b>Compromiso:</b> Atención inmediata y soporte 24/7.</li>
												<li className='text-darkGray list-disc text-[16px] albert-sans-300 mb-2'><b>Calidad:</b> Alianzas con marcas líderes garantizan la mejor tecnología.</li>
												<li className='text-darkGray list-disc text-[16px] albert-sans-300 mb-2'><b>Innovación:</b> Nos mantenemos a la vanguardia en metodologías y herramientas.</li>
											</ul>
										</div>
									</div>
								</animated.div>
							</div>
						</div>
					</section>

					<Form />
				</div>
			}
		</Layout>
	)
}

export default About