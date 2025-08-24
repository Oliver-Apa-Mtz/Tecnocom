import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Layout from '../../components/Layout';
import Form from '../../components/Form';

import BannerHome from '../../assets/img/banner-product.webp';

import DetailSmall1 from '../../assets/img/service-small-1.png';
import DetailSmall2 from '../../assets/img/service-small-2.png';
import DetailSmall3 from '../../assets/img/service-small-3.png';
import DetailSmall4 from '../../assets/img/service-small-4.png';
import DetailSmall5 from '../../assets/img/service-small-5.png';

import Slider1 from '../../assets/img/Slider-1.webp';
import Slider2 from '../../assets/img/Slider-2.webp';
import Slider3 from '../../assets/img/Slider-3.webp';
import Slider4 from '../../assets/img/Slider-4.webp';

const Product = () => {
	const [activeDetail, setActiveDetail] = useState(1);
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const isMobile = window.innerWidth <= 1023;

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 200;
		setIsVisibleBanner2(scrollPosition > (headerHeight));
	};
	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
	});
	const animationPropsBanner2 = useSpring({
		opacity: isVisibleBanner2 ? 1 : 0,
		transform: isVisibleBanner2 ? 'translateY(0)' : 'translateY(50px)',
	});

	const detailAnimation = useSpring({
		opacity: activeDetail > 0 ? 1 : 0,
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
					<section className="w-full h-[400px] lg:h-[600px] p-8 md:p-20 bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${BannerHome})` }}>
						<div className="w-full max-w-[1360px] mx-auto">
							<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
								<div className="text-center">
									<h1 className="text-[30px] md:text-[40px] lg:text-[50px] poppins-semibold text-white w-full md:w-[740px] mx-auto mb-8 md:leading-[50px] lg:leading-[60px]">
										<span className="text-secundario">Industrias</span><br></br> Para que tu empresa avance
									</h1>
									<p className="text-white font-light text-[20px] albert-sans-300">
										Ofrecemos servicios claros, categorizados y fáciles de entender:
									</p>
								</div>
							</animated.div>
						</div>
					</section>

					<section className='w-full pt-10 pb-20'>
						<div className="max-w-[1360px] mx-auto px-[20px]">
							<p className="text-principal text-center text-[22px] lg:text-[34px] poppins-semibold px-4 lg:px-[80px]">
								Cada servicio está diseñado para resolver necesidades
								reales de tu empresa de forma clara y sencilla:
							</p>
							<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
								<div className='flex justify-center gap-1 lg:gap-4 mt-8 lg:mt-16 border-b-[2px] border-principal pb-8'>
									<div className='w-[240px] cursor-pointer text-center relative' id="DetailSmall1" onClick={() => {
										setActiveDetail(0);
										setTimeout(() => {
											setActiveDetail(1);
										}, 100);
									}}>
										<img src={DetailSmall1} alt="" className="w-full h-[50px] sm:h-[70px] md:h-[110px] lg:h-[220px] object-cover" />
										<p className='text-text text-[12px] sm:text-[14px] lg:text-[20px] albert-sans-300 py-2'>Hogar</p>
										{activeDetail === 1 && <div className="detail-active"></div>}
									</div>
									<div className='w-[240px] cursor-pointer text-center relative' id="DetailSmall2" onClick={() => {
										setActiveDetail(0);
										setTimeout(() => {
											setActiveDetail(2);
										}, 100);
									}}>
										<img src={DetailSmall2} alt="" className="w-full h-[50px] sm:h-[70px] md:h-[110px] lg:h-[220px] object-cover" />
										<p className='text-text text-[12px] sm:text-[14px] lg:text-[20px] albert-sans-300 py-2'>Hospital</p>
										{activeDetail === 2 && <div className="detail-active"></div>}
									</div>
									<div className='w-[240px] cursor-pointer text-center relative' id="DetailSmall3" onClick={() => {
										setActiveDetail(0);
										setTimeout(() => {
											setActiveDetail(3);
										}, 100);
									}}>
										<img src={DetailSmall3} alt="" className="w-full h-[50px] sm:h-[70px] md:h-[110px] lg:h-[220px] object-cover" />
										<p className='text-text text-[12px] sm:text-[14px] lg:text-[20px] albert-sans-300 py-2'>Hoteleria</p>
										{activeDetail === 3 && <div className="detail-active"></div>}
									</div>
									<div className='w-[240px] cursor-pointer text-center relative' id="DetailSmall4" onClick={() => {
										setActiveDetail(0);
										setTimeout(() => {
											setActiveDetail(4);
										}, 100);
									}}>
										<img src={DetailSmall4} alt="" className="w-full h-[50px] sm:h-[70px] md:h-[110px] lg:h-[220px] object-cover" />
										<p className='text-text text-[12px] sm:text-[14px] lg:text-[20px] albert-sans-300 py-2'>Industrial</p>
										{activeDetail === 4 && <div className="detail-active"></div>}
									</div>
									<div className='w-[240px] cursor-pointer text-center relative' id="DetailSmall5" onClick={() => {
										setActiveDetail(0);
										setTimeout(() => {
											setActiveDetail(5);
										}, 100);
									}}>
										<img src={DetailSmall5} alt="" className="w-full h-[50px] sm:h-[70px] md:h-[110px] lg:h-[220px] object-cover" />
										<p className='text-text text-[12px] sm:text-[14px] lg:text-[20px] albert-sans-300 py-2'>Educación</p>
										{activeDetail === 5 && <div className="detail-active"></div>}
									</div>
								</div>
							</animated.div>

							{activeDetail === 1 && (
								<animated.div style={activeDetail === 1 ? detailAnimation : {}} className="w-full">
									<div className="py-4">
										<h4 className="text-[20px] md:text-[24px] lg:text-[34px] poppins-semibold text-principal text-uppercase">Hogar</h4>
										<p className="text-[18px] md:text-[22px] poppins-regular">Explora lo que podemos hacer por tu vida diaria.</p>
										<p className='text-text text-[16px] md:text-[18px] albert-sans-300 py-2'>
											Los hogares hoy en día evolucionan con rapidez,
											requerimos espacios más funcionales, cómodos y
											seguros. Contar con proveedores especializados
											que ofrezcan soluciones eficientes, confiables y
											adecuadas es clave para mejorar la calidad de vida
											y la experiencia en el entorno doméstico.
										</p>
									</div>
									<img src={Slider1} alt="" className='h-auto sm:h-[400px] md:h-[500px] lg:h-[880px]' style={{ width: '100%' }} />
								</animated.div>
							)}
							{activeDetail === 2 && (
								<animated.div style={activeDetail === 2 ? detailAnimation : {}} className="w-full">
									<div className="py-4">
										<h4 className="text-[20px] md:text-[24px] lg:text-[34px] poppins-semibold text-principal text-uppercase">Hospital</h4>
										<p className="text-[18px] md:text-[22px] poppins-regular">Explora lo que podemos hacer por tu vida diaria.</p>
										<p className='text-text text-[16px] md:text-[18px] albert-sans-300 py-2'>
											Los hogares hoy en día evolucionan con rapidez,
											requerimos espacios más funcionales, cómodos y
											seguros. Contar con proveedores especializados
											que ofrezcan soluciones eficientes, confiables y
											adecuadas es clave para mejorar la calidad de vida
											y la experiencia en el entorno doméstico.
										</p>
									</div>
									<img src={Slider2} alt="" className='h-auto sm:h-[400px] md:h-[500px] lg:h-[880px]' style={{ width: '100%' }} />
								</animated.div>
							)}
							{activeDetail === 3 && (
								<animated.div style={activeDetail === 3 ? detailAnimation : {}} className="w-full">
									<div className="py-4">
										<h4 className="text-[20px] md:text-[24px] lg:text-[34px] poppins-semibold text-principal text-uppercase">Hoteleria</h4>
										<p className="text-[18px] md:text-[22px] poppins-regular">Explora lo que podemos hacer por tu vida diaria.</p>
										<p className='text-text text-[16px] md:text-[18px] albert-sans-300 py-2'>
											Los hogares hoy en día evolucionan con rapidez,
											requerimos espacios más funcionales, cómodos y
											seguros. Contar con proveedores especializados
											que ofrezcan soluciones eficientes, confiables y
											adecuadas es clave para mejorar la calidad de vida
											y la experiencia en el entorno doméstico.
										</p>
									</div>
									<img src={Slider3} alt="" className='h-auto sm:h-[400px] md:h-[500px] lg:h-[880px]' style={{ width: '100%' }} />
								</animated.div>
							)}
							{activeDetail === 4 && (
								<animated.div style={activeDetail === 4 ? detailAnimation : {}} className="w-full">
									<div className="py-4">
										<h4 className="text-[20px] md:text-[24px] lg:text-[34px] poppins-semibold text-principal text-uppercase">Industrial</h4>
										<p className="text-[18px] md:text-[22px] poppins-regular">Explora lo que podemos hacer por tu vida diaria.</p>
										<p className='text-text text-[16px] md:text-[18px] albert-sans-300 py-2'>
											Los hogares hoy en día evolucionan con rapidez,
											requerimos espacios más funcionales, cómodos y
											seguros. Contar con proveedores especializados
											que ofrezcan soluciones eficientes, confiables y
											adecuadas es clave para mejorar la calidad de vida
											y la experiencia en el entorno doméstico.
										</p>
									</div>
									<img src={Slider4} alt="" className='h-auto sm:h-[400px] md:h-[500px] lg:h-[880px]' style={{ width: '100%' }} />
								</animated.div>
							)}
							{activeDetail === 5 && (
								<animated.div style={activeDetail === 5 ? detailAnimation : {}} className="w-full">
									<div className="py-4">
										<h4 className="text-[20px] md:text-[24px] lg:text-[34px] poppins-semibold text-principal text-uppercase">Educación</h4>
										<p className="text-[18px] md:text-[22px] poppins-regular">Explora lo que podemos hacer por tu vida diaria.</p>
										<p className='text-text text-[16px] md:text-[18px] albert-sans-300 py-2'>
											Los hogares hoy en día evolucionan con rapidez,
											requerimos espacios más funcionales, cómodos y
											seguros. Contar con proveedores especializados
											que ofrezcan soluciones eficientes, confiables y
											adecuadas es clave para mejorar la calidad de vida
											y la experiencia en el entorno doméstico.
										</p>
									</div>
									<img src={Slider4} alt="" className='h-auto sm:h-[400px] md:h-[500px] lg:h-[880px]' style={{ width: '100%' }} />
								</animated.div>
							)}

						</div>
					</section>

					<Form />

				</div>
			}
		</Layout>
	)
}

export default Product