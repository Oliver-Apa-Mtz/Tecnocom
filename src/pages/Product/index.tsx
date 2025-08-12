import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Layout from '../../components/Layout';

import BannerHome from '../../assets/img/banner-product.png';
import BannerForm from '../../assets/img/banner-form.png';

import DetailSmall1 from '../../assets/img/service-small-1.png';
import DetailSmall2 from '../../assets/img/service-small-2.png';
import DetailSmall3 from '../../assets/img/service-small-3.png';
import DetailSmall4 from '../../assets/img/service-small-4.png';
import DetailSmall5 from '../../assets/img/service-small-5.png';

import Slider1 from '../../assets/img/Slider-1.png';
import Slider2 from '../../assets/img/Slider-2.png';
import Slider3 from '../../assets/img/Slider-3.png';
import Slider4 from '../../assets/img/Slider-4.png';

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
									<h1 className="text-[30px] md:text-[40px] lg:text-[50px] poppins-semibold text-white w-full md:w-[700px] mx-auto mb-8 md:leading-[50px] lg:leading-[60px]">
										<span className="text-secundario">Productos y servicios</span><br></br> Para que tu empresa avance
									</h1>
									<p className="text-white font-light text-[20px] albert-sans-300">
										Oofrecemos servicios claros, categorizados y fáciles de entender:
									</p>
								</div>
							</animated.div>
						</div>
					</section>

					<section className='w-full pt-10 pb-20'>
						<div className="max-w-[1360px] mx-auto px-[20px]">
							<p className="text-principal text-[22px] lg:text-[34px] poppins-semibold px-4 lg:px-[80px]">
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

					<section className="w-full h-auto lg:h-[800px] p-6 sm:p-10 lg:p-20 bg-cover bg-center mb-8" style={{ backgroundImage: `url(${BannerForm})` }}>
						<div className="w-full max-w-[1360px] mx-auto">
							<div className='flex gap-10 lg:gap-20 justify-between flex-wrap lg:flex-nowrap'>
								<div className='text-white text-center lg:text-left'>
									<h2 className='w-full max-w-full lg:max-w-[380px] text-[24px] lg:text-[34px] poppins-semibold mb-4 leading-[30px] lg:leading-[40px]'>Resolvamos los desafíos de tecnología <br></br>¡Comienza hoy!</h2>
									<p className='w-full lg:w-[270px] text-[16px] poppins-regular'>
										Complete el formulario a continuación y uno
										de nuestros expertos se pondrá en contacto
										con usted dentro de 24 horas para discutir
										sus necesidades.
									</p>
								</div>
								<div className='form w-[100%] max-w-[710px] mx-auto lg:mx-0 rounded-3xl bg-white p-4 sm:p-8'>
									<div className='flex gap-2 sm:gap-6 justify-between mb-2 sm:mb-6 flex-wrap md:flex-nowrap'>
										<input type="text" placeholder='Nombre*' className='rounded-lg border border-[#EBEBEB] grow px-4 py-3 w-full sm:w-auto albert-sans-300' />
										<input type="text" placeholder="Número de teléfono" className='rounded-lg border border-[#EBEBEB] grow px-4 py-3 w-full sm:w-auto albert-sans-300' />
									</div>
									<div className='flex gap-2 sm:gap-6 justify-between mb-2 sm:mb-6 flex-wrap md:flex-nowrap'>
										<input type="text" placeholder='Correo electrónico*' className='rounded-lg border border-[#EBEBEB] grow px-4 py-3 w-full sm:w-auto albert-sans-300' />
										<input type="text" placeholder="Nombre de la empresa" className='rounded-lg border border-[#EBEBEB] grow px-4 py-3 w-full sm:w-auto albert-sans-300' />
									</div>
									<div className='flex gap-2 sm:gap-6 justify-between mb-2 sm:mb-6 flex-wrap md:flex-nowrap'>
										<input type="text" placeholder='¿En qué podemos ayudarle?*' className='rounded-lg border border-[#EBEBEB] grow px-4 py-3 w-full sm:w-auto albert-sans-300' />
										<input type="text" placeholder="Número de empleados" className='rounded-lg border border-[#EBEBEB] grow px-4 py-3 w-full sm:w-auto albert-sans-300' />
									</div>
									<div>
										<textarea name="" id="" rows={5} className='rounded-lg border border-[#EBEBEB] w-full px-4 py-3 sm:h-32 md:h-36 lg:h-40 albert-sans-300'></textarea>
										<p className='text-center text-purple text-[14px] mt-4 albert-sans-300'>
											Sus datos están seguros con nosotros.<br></br>
											Nunca compartimos su información y solo la usamos para servirle mejor.
										</p>
										<div className='flex justify-center'>
											<a className='button button--secondary poppins-regular' href="" style={{ padding: '11px 20px', marginBottom: 0 }}>Lea más sobre nosotros</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

				</div>
			}
		</Layout>
	)
}

export default Product