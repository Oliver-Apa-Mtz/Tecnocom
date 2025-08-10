
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';
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
	centerMode: true,
	centerPadding: "100px",
	slidesToShow: 1,
};

const Home = () => {

	return (
		<Layout>
			{
				<div>
					<section className="w-full h-[1020px] p-20 bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${BannerHome})` }}>
						<div className="max-w-[1360px] mx-auto">
							<div className="text-center">
								<h1 className="text-[50px] font-bold text-white w-[700px] mx-auto mb-8">
									<span className="text-secundario">Infraestructura Tecnológica</span> que Sostiene tu Negocio
								</h1>
								<p className="text-white font-light text-[20px]">
									Redes de alta disponibilidad, centros de datos
									robustos y soluciones de conectividad para que
									nunca detengas tu operación.
								</p>
								<div className='flex justify-center mt-4'>
									<a className='button button--primary' href="">Contáctanos</a>
								</div>
							</div>
						</div>
					</section>

					<section className="w-full -mt-[80px]">
						<div className="max-w-[1360px] mx-auto px-[20px] flex justify-center gap-16 text-center">
							<div className='w-full max-w-[360px] h-[306px] rounded-2xl shadow-xl flex items-center justify-center px-10 py-6 bg-white'>
								<div>
									<img src={Icon1} className="w-[80px] mx-auto mb-2" />
									<h3 className="text-principal text-[20px] font-semibold mb-2">Cobertura Nacional:</h3>
									<p className="text-text text-[18px] px-7">Soluciones optimizadas para cada región.</p>
								</div>
							</div>
							<div className='w-full max-w-[360px] h-[306px] rounded-2xl shadow-xl flex items-center justify-center px-10 py-6 bg-white'>
								<div>
									<img src={Icon2} className="w-[80px] mx-auto mb-2" />
									<h3 className="text-principal text-[20px] font-semibold mb-2">Expertise Multisectorial</h3>
									<p className="text-text text-[18px]">Experiencia en salud, gobierno, industria y comercio.</p>
								</div>
							</div>
							<div className='w-full max-w-[360px] h-[306px] rounded-2xl shadow-xl flex items-center justify-center px-10 py-6 bg-white'>
								<div>
									<img src={Icon3} className="w-[80px] mx-auto mb-2" />
									<h3 className="text-principal text-[20px] font-semibold mb-2">Atención Personalizada:</h3>
									<p className="text-text text-[18px]">Asesoría técnica 24/7 adaptada a tu operación.</p>
								</div>
							</div>
						</div>
					</section>

					<section className="w-full mt-20 mb-10">
						<div className="max-w-[1360px] mx-auto px-[20px] flex flex-wrap items-center justify-between gap-8">
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
							<div className="flex-1">
								<img className='h-[55px] mb-6' src={Logo} alt="" loading="lazy" />
								<h2 className="text-2xl md:text-3xl font-bold text-principal mb-4">Garantizamos estabilidad y escalabilidad en cada proyecto.</h2>
								<p className="text-text text-[18px]">
									Nuestra experiencia abarca desde el diseño
									de redes empresariales hasta sistemas
									especializados de seguridad y automatización
									industrial.
								</p>
								<div className='mt-4'>
									<a className='button button--secondary block min-w-[200px]' href="">Ver más</a>
								</div>
							</div>
							<div className="flex-1">
								<img src={Image1} alt="Engineer" className="" />
							</div>
						</div>
					</section>

					<section className='w-full'>
						<div className="max-w-[1360px] mx-auto px-[20px] pt-10 text-center">
							<h3 className="text-[50px] font-semibold text-secundario mb-4">Explora nuestros servicios</h3>
							<p className="text-principal text-[34px] font-semibold px-[250px]">
								Cada servicio está diseñado para resolver
								necesidades reales de forma clara y sencilla:
							</p>
						</div>
						<div className='p-6'>
							<Slider {...settings}>
								<div className="w-full max-w-[1580px]">
									<div className="px-8 py-4">
										<h4 className="text-[34px] font-semibold text-principal">Hogar</h4>
										<p className="text-[22px] font-medium">Explora lo que podemos hacer por tu vida diaria.</p>
									</div>
									<img src={Slider1} alt="" style={{ height: '800px', width: '100%' }} />
								</div>
								<div className="w-full max-w-[1580px]">
									<div className="px-8 py-4">
										<h4 className="text-[34px] font-semibold text-principal">Hospitales</h4>
										<p className="text-[22px] font-medium">La tecnología a favor de tu salud y tranquilidad.</p>
									</div>
									<img src={Slider2} alt="" style={{ height: '800px', width: '100%' }} />
								</div>
								<div className="w-full max-w-[1580px]">
									<div className="px-8 py-4">
										<h4 className="text-[34px] font-semibold text-principal">Hotelería</h4>
										<p className="text-[22px] font-medium">Mejora la experiencia de tus huespedes y la rapidez en el servicio.</p>
									</div>
									<img src={Slider3} alt="" style={{ height: '800px', width: '100%' }} />
								</div>
								<div className="w-full max-w-[1580px]">
									<div className="px-8 py-4">
										<h4 className="text-[34px] font-semibold text-principal">Industria</h4>
										<p className="text-[22px] font-medium">Eficienta la producción manteniendo la seguridad y comunicación al máximo.</p>
									</div>
									<img src={Slider4} alt="" style={{ height: '800px', width: '100%' }} />
								</div>
							</Slider>
						</div>
					</section>
				</div>
			}
		</Layout>
	)
}

export default Home