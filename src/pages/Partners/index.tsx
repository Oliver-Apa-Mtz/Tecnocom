import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Layout from '../../components/Layout';
import Form from '../../components/Form';

import BannerPartners from '../../assets/img/banner-partners.webp';
import Socio1 from '../../assets/img/socio-1.png';
import Socio2 from '../../assets/img/socio-2.png';
import Socio3 from '../../assets/img/socio-3.png';
import Socio4 from '../../assets/img/socio-4.png';
import Socio5 from '../../assets/img/socio-5.png';
import Socio6 from '../../assets/img/socio-6.png';
import Socio7 from '../../assets/img/socio-7.png';
import Socio8 from '../../assets/img/socio-8.png';
import Socio9 from '../../assets/img/socio-9.png';
import Socio10 from '../../assets/img/socio-10.png';
import Socio11 from '../../assets/img/socio-11.png';
import Socio12 from '../../assets/img/socio-12.png';
import Socio13 from '../../assets/img/socio-13.png';
import Socio14 from '../../assets/img/socio-14.png';
import Socio15 from '../../assets/img/socio-15.png';
import Socio16 from '../../assets/img/socio-16.png';
import Socio17 from '../../assets/img/socio-17.png';
import Socio18 from '../../assets/img/socio-18.png';

const Partners = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleBanner2, setIsVisibleBanner2] = useState(false);
	const isMobile = window.innerWidth <= 1023;

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const headerHeight = 200;
		setIsVisibleBanner2(scrollPosition > (headerHeight - 100));
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
					<section className="w-full h-[600px] p-8 md:p-20 bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${BannerPartners})` }}>
						<div className="w-full max-w-[1360px] mx-auto">
							<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
								<div className="text-center">
									<h1 className="text-[30px] md:text-[40px] lg:text-[50px] poppins-semibold text-white w-full mx-auto mb-8 md:leading-[50px] lg:leading-[60px]">
										<span className="text-secundario">Socios Estratégicos</span><br></br> Para que tu empresa avance
									</h1>
									<p className="text-white font-light text-[20px] albert-sans-300">
										Colaboramos con las principales marcas globales
										para ofrecerte lo mejor del mercado:
									</p>
								</div>
							</animated.div>
						</div>
					</section>

					<section className='w-full'>
						<animated.div style={!isMobile ? animationPropsBanner2 : {}} className="animated-element w-full">
							<div className="w-full max-w-[1360px] mx-auto flex justify-center flex-wrap pt-20 pb-10">
								<img src={Socio1} alt="Icono AXIS" className='w-[150px] md:w-[200px] mb-4' />
								<img src={Socio2} alt="Icono CISCO" className='w-[150px] md:w-[200px] mb-4' />
								<img src={Socio3} alt="Icono DELL" className='w-[150px] md:w-[200px] mb-4 ' />
								<img src={Socio4} alt="Icono ORACLE" className='w-[150px] md:w-[200px] mb-4' />
								<img src={Socio5} alt="Icono HUAWEI" className='w-[150px] md:w-[200px] mb-4' />
								<img src={Socio6} alt="Icono HIKVISION" className='w-[150px] md:w-[200px] mb-4' />
								<img src={Socio7} alt="Icono AJHUA" className='w-[150px] md:w-[200px] mb-4' />
								<img src={Socio8} alt="Icono MOTOROLA" className='w-[150px] md:w-[200px] mb-4' />
								<img src={Socio9} alt="Icono JUNIPER" className='w-[150px] md:w-[200px] mb-4' />
								<img src={Socio10} alt="Icono VMWARE" className='w-[150px] md:w-[200px] mb-4' />
								<img src={Socio11} alt="Icono PAESSLER" className='w-[150px] md:w-[200px] mb-4' />
								<img src={Socio12} alt="Icono DJI" className='w-[150px] md:w-[200px] mb-4' />
								<img src={Socio13} alt="Icono AUTEL" className='w-[150px] md:w-[200px] mb-4' />
								<img src={Socio14} alt="Icono KENWOOD" className='w-[150px] md:w-[200px] mb-4' />
								<img src={Socio15} alt="Icono INGRAM" className='w-[150px] md:w-[200px] mb-4' />
								<img src={Socio16} alt="Icono ANIXTER" className='w-[150px] md:w-[200px] mb-4' />
								<img src={Socio17} alt="Icono SYSCOM" className='w-[150px] md:w-[200px] mb-4' />
								<img src={Socio18} alt="Icono CVA" className='w-[150px] md:w-[200px] mb-4' />
							</div>
						</animated.div>
					</section>

					<Form />
				</div>
			}
		</Layout>
	)
}

export default Partners