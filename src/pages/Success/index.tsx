import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Layout from '../../components/Layout';

import BannerSuccess from '../../assets/img/banner-success.webp';
import BannerEffect from '../../assets/img/banner-effect.webp';
import Circle1 from '../../assets/img/circle-1.png';
import Circle2 from '../../assets/img/circle-2.png';
import Circle3 from '../../assets/img/circle-3.png';
import Circle4 from '../../assets/img/circle-4.png';

const Success = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const [isVisibleBanner3, setIsVisibleBanner3] = useState(false);
	const [isVisibleBanner4, setIsVisibleBanner4] = useState(false);
	const [isVisibleBanner5, setIsVisibleBanner5] = useState(false);
	const isMobile = window.innerWidth <= 1023;

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 200;
		if (scrollPosition > (headerHeight + 100)) {
			setIsVisibleBanner2(true);
			setTimeout(() => {
				setIsVisibleBanner3(true);
			}, 500);
			setTimeout(() => {
				setIsVisibleBanner4(true);
			}, 1000);
			setTimeout(() => {
				setIsVisibleBanner5(true);
			}, 1500);
		} else {
			setIsVisibleBanner2(false);
			setIsVisibleBanner3(false);
			setIsVisibleBanner4(false);
			setIsVisibleBanner5(false);
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
					<section className="w-full h-[300px] md:h-[400px] lg:h-[600px] p-8 md:p-20 bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${BannerSuccess})` }}>
						<div className="w-full max-w-[1360px] mx-auto">
							<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
								<div className="text-center">
									<h1 className="text-[30px] md:text-[40px] lg:text-[50px] poppins-semibold text-white w-full mx-auto mb-8 md:leading-[50px] lg:leading-[60px]">
										<span className="text-secundario">¿Cómo Trabajamos?</span>
									</h1>
								</div>
							</animated.div>
						</div>
					</section>

					<section className="w-full h-auto md:h-[800px] p-8 md:p-20 bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${BannerEffect})` }}>
						<div className="w-full max-w-[1360px] mx-auto">
							<div className='w-full max-w-[1170px] mx-auto flex lg:border-b border-white/15 flex-wrap md:flex-nowrap'>
								<div className='w-full md:w-1/2 text-white text-center lg:border-r border-white/15 py-10'>
									<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
										<img src={Circle1} alt="" className='w-[74px] mx-auto mb-4' />
										<p className='text-[20px] mb-4 poppins-semibold px-4 lg:px-0'>Diagnóstico Exhaustivo</p>
										<p className='text-[14px] mb-4 poppins-regular w-full sm:w-[340px] mx-auto px-4 lg:px-0'>
											1. Evaluamos tu infraestructura y
											objetivos, empleando herramientas
											de auditoría de redes y seguridad.
										</p>
									</animated.div>
								</div>
								<div className='w-full md:w-1/2 text-white text-center py-10'>
									<animated.div style={!isMobile ? animationPropsBanner3 : {}} className="animated-element">
										<img src={Circle2} alt="" className='w-[74px] mx-auto mb-4' />
										<p className='text-[20px] mb-4 poppins-semibold px-4 lg:px-0'>Propuesta Integral</p>
										<p className='text-[14px] mb-4 poppins-regular w-full sm:w-[340px] mx-auto px-4 lg:px-0'>
											2. Presentamos Propuesta técnica y
											propuesta económica detallada para
											su proyecto.
										</p>
									</animated.div>
								</div>
							</div>
							<div className='w-full max-w-[1170px] mx-auto flex flex-wrap md:flex-nowrap'>
								<div className='w-full md:w-1/2 text-white text-center lg:border-r border-white/15 py-10'>
									<animated.div style={!isMobile ? animationPropsBanner4 : {}} className="animated-element">
										<img src={Circle3} alt="" className='w-[74px] mx-auto mb-4' />
										<p className='text-[20px] mb-4 poppins-semibold px-4 lg:px-0'>Ejecución Eficiente</p>
										<p className='text-[14px] mb-4 poppins-regular w-full sm:w-[340px] mx-auto px-4 lg:px-0'>
											3. Nuestro equipo certificado implementa
											la solución con mínima interrupción a
											tus operaciones.
										</p>
									</animated.div>
								</div>
								<div className='w-full md:w-1/2 text-white text-center py-10'>
									<animated.div style={!isMobile ? animationPropsBanner5 : {}} className="animated-element">
										<img src={Circle4} alt="" className='w-[74px] mx-auto mb-4' />
										<p className='text-[20px] mb-4 poppins-semibold px-4 lg:px-0'>Optimización Continua</p>
										<p className='text-[14px] mb-4 poppins-regular w-full sm:w-[340px] mx-auto px-4 lg:px-0'>
											4. Soporte 24/7, monitoreo proactivo y
											mejora continua mediante reportes periódicos
										</p>
									</animated.div>
								</div>
							</div>
						</div>
					</section>

				</div>
			}
		</Layout>
	)
}

export default Success