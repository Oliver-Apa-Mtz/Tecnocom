import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Layout from '../../components/Layout';
import Form from '../../components/Form';
import SEO from '../../components/SEO';

import BannerContact from '../../assets/img/banner-contact.webp';

const Contact = () => {
	const [isVisible, setIsVisible] = useState(false);
	const isMobile = window.innerWidth <= 1023;

	const animationPropsBanner1 = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
	});

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<Layout>
			<SEO
				title="Contacto"
				description="Contáctanos para resolver tus desafíos tecnológicos. Nuestros expertos te responderán en 24 horas. Servicios de TI en Mazatlán, Sinaloa."
				keywords="contacto, servicios TI, tecnología, Mazatlán, Sinaloa, soporte técnico"
				url="/contacto"
			/>
			<div>
				<section className="w-full h-[600px] p-8 md:p-20 bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${BannerContact})` }} role="banner">
					<div className="w-full max-w-[1360px] mx-auto">
						<animated.div style={!isMobile ? animationPropsBanner1 : {}} className="animated-element">
							<div className="text-center">
								<h1 className="text-[30px] md:text-[40px] lg:text-[50px] poppins-semibold text-white w-full mx-auto mb-8 md:leading-[50px] lg:leading-[60px]">
									<span className="text-secundario">Contacto</span>
								</h1>
							</div>
						</animated.div>
					</div>
				</section>

				<section className='w-full pt-10 pb-20' role="main">
					<div className="w-full max-w-[1360px] mx-auto px-0 md:px-[20px]">
						<p className="text-principal text-center text-[22px] lg:text-[34px] poppins-semibold px-4 lg:px-[80px]">
							Complete el formulario a continuación y uno de nuestros
							expertos se pondrá en contacto con usted.
						</p>
					</div>
				</section>

				<Form />
			</div>
		</Layout>
	)
}

export default Contact