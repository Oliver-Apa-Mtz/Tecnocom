
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';

import BannerHome from '../../assets/img/banner-products.png';
import Card1 from '../../assets/img/card-1.png';
import Card2 from '../../assets/img/card-2.png';
import Card3 from '../../assets/img/card-3.png';
import Card4 from '../../assets/img/card-4.png';
import Card5 from '../../assets/img/card-5.png';
import Card6 from '../../assets/img/card-6.png';
import Card7 from '../../assets/img/card-7.png';
import Card8 from '../../assets/img/card-8.png';
import Card9 from '../../assets/img/card-9.png';
import Card10 from '../../assets/img/card-10.png';
import Card11 from '../../assets/img/card-11.png';
import Card12 from '../../assets/img/card-12.png';

const Products = () => {

	return (
		<Layout>
			{
				<div>
					<section className="w-full h-[600px] p-20 bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${BannerHome})` }}>
						<div className="max-w-[1360px] mx-auto">
							<div className="text-center">
								<h1 className="text-[50px] font-bold text-white w-[700px] mx-auto mb-8">
									<span className="text-secundario">Productos y servicios</span> Para que tu empresa avance
								</h1>
								<p className="text-white font-light text-[20px]">
									Oofrecemos servicios claros, categorizados y fáciles de entender:
								</p>
							</div>
						</div>
					</section>

					<section className='w-full pt-10 pb-20'>
						<div className="max-w-[1360px] mx-auto px-[20px]">
							<p className="text-principal text-[34px] font-semibold px-[80px]">
								Cada servicio está diseñado para resolver necesidades
								reales de tu empresa de forma clara y sencilla:
							</p>

							<div className='flex justify-center gap-4 mt-16'>
								<div>
									<Link to="/producto-detalle" className='button button--secondary' style={{ padding: '11px 20px' }}>
										Conectividad
									</Link>
								</div>
								<div>
									<Link to="/producto-detalle" className='button button--secondary' style={{ padding: '11px 20px' }}>
										Seguridad
									</Link>
								</div>
								<div>
									<Link to="/producto-detalle" className='button button--secondary' style={{ padding: '11px 20px' }}>
										Infraestructura
									</Link>
								</div>
								<div>
									<Link to="/producto-detalle" className='button button--secondary' style={{ padding: '11px 20px' }}>
										Innovación
									</Link>
								</div>
								<div>
									<Link to="/producto-detalle" className='button button--secondary' style={{ padding: '11px 20px' }}>
										Comunicación
									</Link>
								</div>
								<div>
									<Link to="/producto-detalle" className='button button--secondary' style={{ padding: '11px 20px' }}>
										Sistemas Hospitalarios
									</Link>
								</div>
							</div>

							<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-14">
								<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
									<img src={Card1} alt="Conectividad" className="w-full h-[400px] object-cover" />
									<div className="p-5">
										<h3 className="text-[20px] font-semibold text-principal mb-2">Conectividad</h3>
										<p className="text-[16px] font-bold text-text">Telecomunicaciones y Redes</p>
										<p className="text-[16px] font-light text-text">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
									</div>
								</div>
								<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
									<img src={Card2} alt="Telefonía SIP" className="w-full h-[400px] object-cover" />
									<div className="p-5">
										<h3 className="text-[20px] font-semibold text-principal mb-2">Conectividad</h3>
										<p className="text-[16px] font-bold text-text">Telecomunicaciones y Redes</p>
										<p className="text-[16px] font-light text-text">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
									</div>
								</div>
								<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
									<img src={Card3} alt="Seguridad" className="w-full h-[400px] object-cover" />
									<div className="p-5">
										<h3 className="text-[20px] font-semibold text-principal mb-2">Conectividad</h3>
										<p className="text-[16px] font-bold text-text">Telecomunicaciones y Redes</p>
										<p className="text-[16px] font-light text-text">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
									</div>
								</div>
								<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
									<img src={Card4} alt="Seguridad" className="w-full h-[400px] object-cover" />
									<div className="p-5">
										<h3 className="text-[20px] font-semibold text-principal mb-2">Conectividad</h3>
										<p className="text-[16px] font-bold text-text">Telecomunicaciones y Redes</p>
										<p className="text-[16px] font-light text-text">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
									</div>
								</div>
								<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
									<img src={Card5} alt="Seguridad" className="w-full h-[400px] object-cover" />
									<div className="p-5">
										<h3 className="text-[20px] font-semibold text-principal mb-2">Conectividad</h3>
										<p className="text-[16px] font-bold text-text">Telecomunicaciones y Redes</p>
										<p className="text-[16px] font-light text-text">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
									</div>
								</div>
								<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
									<img src={Card6} alt="Seguridad" className="w-full h-[400px] object-cover" />
									<div className="p-5">
										<h3 className="text-[20px] font-semibold text-principal mb-2">Conectividad</h3>
										<p className="text-[16px] font-bold text-text">Telecomunicaciones y Redes</p>
										<p className="text-[16px] font-light text-text">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
									</div>
								</div>
								<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
									<img src={Card7} alt="Seguridad" className="w-full h-[400px] object-cover" />
									<div className="p-5">
										<h3 className="text-[20px] font-semibold text-principal mb-2">Conectividad</h3>
										<p className="text-[16px] font-bold text-text">Telecomunicaciones y Redes</p>
										<p className="text-[16px] font-light text-text">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
									</div>
								</div>
								<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
									<img src={Card8} alt="Seguridad" className="w-full h-[400px] object-cover" />
									<div className="p-5">
										<h3 className="text-[20px] font-semibold text-principal mb-2">Conectividad</h3>
										<p className="text-[16px] font-bold text-text">Telecomunicaciones y Redes</p>
										<p className="text-[16px] font-light text-text">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
									</div>
								</div>
								<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
									<img src={Card9} alt="Seguridad" className="w-full h-[400px] object-cover" />
									<div className="p-5">
										<h3 className="text-[20px] font-semibold text-principal mb-2">Conectividad</h3>
										<p className="text-[16px] font-bold text-text">Telecomunicaciones y Redes</p>
										<p className="text-[16px] font-light text-text">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
									</div>
								</div>
								<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
									<img src={Card10} alt="Seguridad" className="w-full h-[400px] object-cover" />
									<div className="p-5">
										<h3 className="text-[20px] font-semibold text-principal mb-2">Conectividad</h3>
										<p className="text-[16px] font-bold text-text">Telecomunicaciones y Redes</p>
										<p className="text-[16px] font-light text-text">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
									</div>
								</div>
								<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
									<img src={Card11} alt="Seguridad" className="w-full h-[400px] object-cover" />
									<div className="p-5">
										<h3 className="text-[20px] font-semibold text-principal mb-2">Conectividad</h3>
										<p className="text-[16px] font-bold text-text">Telecomunicaciones y Redes</p>
										<p className="text-[16px] font-light text-text">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
									</div>
								</div>
								<div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
									<img src={Card12} alt="Seguridad" className="w-full h-[400px] object-cover" />
									<div className="p-5">
										<h3 className="text-[20px] font-semibold text-principal mb-2">Conectividad</h3>
										<p className="text-[16px] font-bold text-text">Telecomunicaciones y Redes</p>
										<p className="text-[16px] font-light text-text">Instalación de redes LAN, enlaces de fibra óptica y Wi-Fi empresarial; creación de centros de datos y soluciones en la nube con respaldo automático.</p>
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

export default Products