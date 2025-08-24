import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';

import BannerHome from '../../assets/img/banner-products.webp';
import Card1 from '../../assets/img/card-1.webp';
import Card2 from '../../assets/img/card-2.webp';
import Card3 from '../../assets/img/card-3.webp';
import Card4 from '../../assets/img/card-4.webp';
import Card5 from '../../assets/img/card-5.webp';
import Card6 from '../../assets/img/card-6.webp';
import Card7 from '../../assets/img/card-7.webp';
import Card8 from '../../assets/img/card-8.webp';
import Card9 from '../../assets/img/card-9.webp';
import Card10 from '../../assets/img/card-10.webp';
import Card11 from '../../assets/img/card-11.webp';
import Card12 from '../../assets/img/card-12.webp';

const Products = () => {
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
										<span className="text-secundario">Productos y servicios</span><br></br> Para que tu empresa avance
									</h1>
									<p className="text-white font-light text-[20px] albert-sans-300">
										Ofrecemos servicios claros, categorizados y fáciles de entender:
									</p>
								</div>
							</animated.div>
						</div>
					</section>

					<section className='w-full pt-10 pb-20'>
						<div className="w-full max-w-[1360px] mx-auto px-0 md:px-[20px]">
							<p className="text-principal text-center text-[22px] lg:text-[34px] poppins-semibold px-4 lg:px-[80px]">
								Cada servicio está diseñado para resolver necesidades
								reales de tu empresa de forma clara y sencilla:
							</p>

							<div className='flex justify-center gap-x-4 mt-16 flex-wrap lg:flex-nowrap'>
								<div>
									<Link to="/industrias" className='button button--secondary block poppins-regular' style={{ padding: '11px 20px', margin: '10px 0' }}>
										Conectividad
									</Link>
								</div>
								<div>
									<Link to="/industrias" className='button button--secondary block poppins-regular' style={{ padding: '11px 20px', margin: '10px 0' }}>
										Seguridad
									</Link>
								</div>
								<div>
									<Link to="/industrias" className='button button--secondary block poppins-regular' style={{ padding: '11px 20px', margin: '10px 0' }}>
										Infraestructura
									</Link>
								</div>
								<div>
									<Link to="/industrias" className='button button--secondary block poppins-regular' style={{ padding: '11px 20px', margin: '10px 0' }}>
										Innovación
									</Link>
								</div>
								<div>
									<Link to="/industrias" className='button button--secondary block poppins-regular' style={{ padding: '11px 20px', margin: '10px 0' }}>
										Comunicación
									</Link>
								</div>
								<div>
									<Link to="/industrias" className='button button--secondary block poppins-regular' style={{ padding: '11px 20px', margin: '10px 0' }}>
										Sistemas Hospitalarios
									</Link>
								</div>
							</div>

							<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element">
								<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-14 px-[20px] lg:px-0">
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
											<img src={Card1} alt="Conectividad" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Conectividad</h3>
												<p className="text-[16px] text-text albert-sans-700">Telecomunicaciones y Redes</p>
												<p className="text-[16px] text-text albert-sans-300">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
											<img src={Card2} alt="Telefonía SIP" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Conectividad</h3>
												<p className="text-[16px] text-text albert-sans-700">Telecomunicaciones y Redes</p>
												<p className="text-[16px] text-text albert-sans-300">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
											<img src={Card3} alt="Seguridad" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Conectividad</h3>
												<p className="text-[16px] text-text albert-sans-700">Telecomunicaciones y Redes</p>
												<p className="text-[16px] text-text albert-sans-300">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
											<img src={Card4} alt="Seguridad" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Conectividad</h3>
												<p className="text-[16px] text-text albert-sans-700">Telecomunicaciones y Redes</p>
												<p className="text-[16px] text-text albert-sans-300">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
											<img src={Card5} alt="Seguridad" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Conectividad</h3>
												<p className="text-[16px] text-text albert-sans-700">Telecomunicaciones y Redes</p>
												<p className="text-[16px] text-text albert-sans-300">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
											<img src={Card6} alt="Seguridad" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Conectividad</h3>
												<p className="text-[16px] text-text albert-sans-700">Telecomunicaciones y Redes</p>
												<p className="text-[16px] text-text albert-sans-300">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
											<img src={Card7} alt="Seguridad" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Conectividad</h3>
												<p className="text-[16px] text-text albert-sans-700">Telecomunicaciones y Redes</p>
												<p className="text-[16px] text-text albert-sans-300">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
											<img src={Card8} alt="Seguridad" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Conectividad</h3>
												<p className="text-[16px] text-text albert-sans-700">Telecomunicaciones y Redes</p>
												<p className="text-[16px] text-text albert-sans-300">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
											<img src={Card9} alt="Seguridad" className="w-full h-[200px] md:h-[300px]] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Conectividad</h3>
												<p className="text-[16px] text-text albert-sans-700">Telecomunicaciones y Redes</p>
												<p className="text-[16px] text-text albert-sans-300">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
											<img src={Card10} alt="Seguridad" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Conectividad</h3>
												<p className="text-[16px] text-text albert-sans-700">Telecomunicaciones y Redes</p>
												<p className="text-[16px] text-text albert-sans-300">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
											<img src={Card11} alt="Seguridad" className="w-full h-[200px] md:h-[300px]] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Conectividad</h3>
												<p className="text-[16px] text-text albert-sans-700">Telecomunicaciones y Redes</p>
												<p className="text-[16px] text-text albert-sans-300">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
											<img src={Card12} alt="Seguridad" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Conectividad</h3>
												<p className="text-[16px] text-text albert-sans-700">Telecomunicaciones y Redes</p>
												<p className="text-[16px] text-text albert-sans-300">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
											</div>
										</div>
									</Link>
								</div>
							</animated.div>
						</div>
					</section>
				</div>
			}
		</Layout>
	)
}

export default Products