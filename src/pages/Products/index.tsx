import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
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
			<SEO 
				title="Productos y Servicios"
				description="Descubre nuestros productos y servicios de TI: conectividad, seguridad, infraestructura, videovigilancia, telefonía SIP y más. Soluciones tecnológicas integrales en Mazatlán."
				keywords="productos TI, servicios tecnológicos, conectividad empresarial, seguridad informática, videovigilancia, telefonía SIP, infraestructura TI"
				url="/productos-servicios"
			/>
			<div>
					<section className="w-full h-[400px] lg:h-[600px] p-8 md:p-20 bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${BannerHome})` }} role="banner">
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

					<section className='w-full pt-10 pb-20' role="main">
						<div className="w-full max-w-[1360px] mx-auto px-0 md:px-[20px]">
							<h2 className="text-principal text-center text-[22px] lg:text-[34px] poppins-semibold px-4 lg:px-[80px]">
								Cada servicio está diseñado para resolver necesidades
								reales de tu empresa de forma clara y sencilla:
							</h2>

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
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer min-h-auto md:min-h-[500px] lg:min-h-[600px]">
											<img src={Card1} alt="Telecomunicaciones y Redes" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Conectividad</h3>
												<p className="text-[16px] text-text albert-sans-700">Telecomunicaciones y Redes</p>
												<p className="text-[16px] text-text albert-sans-300">
													Instalación de redes LAN, enlaces de fibra óptica y
													Wi-Fi empresarial; creación de centros de datos y
													soluciones en la nube con respaldo automático.
												</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer min-h-auto md:min-h-[500px] lg:min-h-[600px]">
											<img src={Card2} alt="Telefonía SIP" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Conectividad</h3>
												<p className="text-[16px] text-text albert-sans-700">Telefonía SIP</p>
												<p className="text-[16px] text-text albert-sans-300">
													Centralitas IP y VoIP que reducen costos, permiten
													movilidad y comunicaciones unificadas (voz, chat y video).
												</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer min-h-auto md:min-h-[500px] lg:min-h-[600px]">
											<img src={Card3} alt="Videovigilancia y Control de Acceso" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Seguridad</h3>
												<p className="text-[16px] text-text albert-sans-700">Videovigilancia y Control de Acceso</p>
												<p className="text-[16px] text-text albert-sans-300">
													Cámaras IP (Axis, Hikvision), monitoreo remoto y
													acceso por huella o tarjeta. Alertas inteligentes
													y grabación continua.
												</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer min-h-auto md:min-h-[500px] lg:min-h-[600px]">
											<img src={Card4} alt="Sistemas Antidrone" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Seguridad</h3>
												<p className="text-[16px] text-text albert-sans-700">Sistemas Antidrone</p>
												<p className="text-[16px] text-text albert-sans-300">
													Tecnología de detección y neutralización de
													drones no autorizados, ideal para instalaciones
													críticas.
												</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer min-h-auto md:min-h-[500px] lg:min-h-[600px]">
											<img src={Card5} alt="Infraestructura Industrial" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Infraestructura</h3>
												<p className="text-[16px] text-text albert-sans-700">Infraestructura Industrial</p>
												<p className="text-[16px] text-text albert-sans-300">
													Sistemas contra incendios, HVAC industrial,
													tableros eléctricos, UPS y generadores que
													mantienen tu operación sin interrupciones.
												</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer min-h-auto md:min-h-[500px] lg:min-h-[600px]">
											<img src={Card6} alt="Distribución de TV Abierta" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Infraestructura</h3>
												<p className="text-[16px] text-text albert-sans-700">Distribución de TV Abierta</p>
												<p className="text-[16px] text-text albert-sans-300">
													Antenas y amplificadores para señal de
													televisión en edificios, hoteles o campus,
													asegurando cobertura nítida en todos los puntos.
												</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer min-h-auto md:min-h-[500px] lg:min-h-[600px]">
											<img src={Card7} alt="Casa de Software e Innovación" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Innovación</h3>
												<p className="text-[16px] text-text albert-sans-700">Casa de Software e Innovación</p>
												<p className="text-[16px] text-text albert-sans-300">
													Desarrollo a medida: aplicaciones web con
													React, backend en Node.js, automatización
													en Python y .NET. Integramos IA, machine
													learning y analítica de datos.
												</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer min-h-auto md:min-h-[500px] lg:min-h-[600px]">
											<img src={Card8} alt="Drones Especializados" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Innovación</h3>
												<p className="text-[16px] text-text albert-sans-700">Drones Especializados</p>
												<p className="text-[16px] text-text albert-sans-300">
													Soluciones DJI y Autel para inspección,
													mapeo y monitoreo agrícola o industrial.
												</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer min-h-auto md:min-h-[500px] lg:min-h-[600px]">
											<img src={Card9} alt="Radiocomunicación" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Comunicación</h3>
												<p className="text-[16px] text-text albert-sans-700">Radiocomunicación</p>
												<p className="text-[16px] text-text albert-sans-300">
													Radios portátiles y base (Motorola, Kenwood),
													repetidores y estaciones para cobertura total
													en zonas remotas.
												</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer min-h-auto md:min-h-[500px] lg:min-h-[600px]">
											<img src={Card10} alt="Sonorización de Aulas" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Comunicación</h3>
												<p className="text-[16px] text-text albert-sans-700">Sonorización de Aulas</p>
												<p className="text-[16px] text-text albert-sans-300">
													Sistemas de audio para aulas y auditorios con
													micrófonos inalámbricos y bocinas de alta fidelidad.
												</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer min-h-auto md:min-h-[500px] lg:min-h-[600px]">
											<img src={Card11} alt="Redes" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Sistemas Hospitalarios</h3>
												<p className="text-[16px] text-text albert-sans-700">Redes</p>
												<p className="text-[16px] text-text albert-sans-300">
													Mejoramos la atención en clínicas y hospitales
													con redes que conectan equipos médicos
													(rayos X, ultrasonido) de forma segura.
												</p>
											</div>
										</div>
									</Link>
									<Link to="/industrias">
										<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer min-h-auto md:min-h-[500px] lg:min-h-[600px]">
											<img src={Card12} alt="Telemedicina" className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover" />
											<div className="p-5">
												<h3 className="text-[20px] poppins-semibold text-principal mb-2">Sistemas Hospitalarios</h3>
												<p className="text-[16px] text-text albert-sans-700">Telemedicina</p>
												<p className="text-[16px] text-text albert-sans-300">
													Implementamos plataformas de telemedicina
													para atender pacientes a distancia, ahorrando
													tiempo y costos.
												</p>
											</div>
										</div>
									</Link>
								</div>
							</animated.div>
						</div>
					</section>
			</div>
		</Layout>
	)
}

export default Products