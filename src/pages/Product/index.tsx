import { useState } from 'react';
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

							<div className='flex justify-center gap-4 mt-16 border-b-[2px] border-principal pb-8'>
								<div className='w-[240px] cursor-pointer text-center relative' id="DetailSmall1" onClick={() => setActiveDetail(1)}>
									<img src={DetailSmall1} alt="" className="w-full h-[220px] object-cover" />
									<p className='text-text text-[20px] font-light p-2'>Hogar</p>
									{activeDetail === 1 && <div className="detail-active"></div>}
								</div>
								<div className='w-[240px] cursor-pointer text-center relative' id="DetailSmall2" onClick={() => setActiveDetail(2)}>
									<img src={DetailSmall2} alt="" className="w-full h-[220px] object-cover" />
									<p className='text-text text-[20px] font-light p-2'>Hospital</p>
									{activeDetail === 2 && <div className="detail-active"></div>}
								</div>
								<div className='w-[240px] cursor-pointer text-center relative' id="DetailSmall3" onClick={() => setActiveDetail(3)}>
									<img src={DetailSmall3} alt="" className="w-full h-[220px] object-cover" />
									<p className='text-text text-[20px] font-light p-2'>Hoteleria</p>
									{activeDetail === 3 && <div className="detail-active"></div>}
								</div>
								<div className='w-[240px] cursor-pointer text-center relative' id="DetailSmall4" onClick={() => setActiveDetail(4)}>
									<img src={DetailSmall4} alt="" className="w-full h-[220px] object-cover" />
									<p className='text-text text-[20px] font-light p-2'>Industrial</p>
									{activeDetail === 4 && <div className="detail-active"></div>}
								</div>
								<div className='w-[240px] cursor-pointer text-center relative' id="DetailSmall5" onClick={() => setActiveDetail(5)}>
									<img src={DetailSmall5} alt="" className="w-full h-[220px] object-cover" />
									<p className='text-text text-[20px] font-light p-2'>Educación</p>
									{activeDetail === 5 && <div className="detail-active"></div>}
								</div>
							</div>

							{activeDetail === 1 && (
								<div className="w-full">
									<div className="py-4">
										<h4 className="text-[34px] font-semibold text-principal text-uppercase">Hogar</h4>
										<p className="text-[22px] font-medium">Explora lo que podemos hacer por tu vida diaria.</p>
										<p className='text-text text-[18px] font-light py-2'>
											Los hogares hoy en día evolucionan con rapidez,
											requerimos espacios más funcionales, cómodos y
											seguros. Contar con proveedores especializados
											que ofrezcan soluciones eficientes, confiables y
											adecuadas es clave para mejorar la calidad de vida
											y la experiencia en el entorno doméstico.
										</p>
									</div>
									<img src={Slider1} alt="" style={{ height: '880px', width: '100%' }} />
								</div>
							)}
							{activeDetail === 2 && (
								<div className="w-full">
									<div className="py-4">
										<h4 className="text-[34px] font-semibold text-principal text-uppercase">Hogar</h4>
										<p className="text-[22px] font-medium">Explora lo que podemos hacer por tu vida diaria.</p>
										<p className='text-text text-[18px] font-light py-2'>
											Los hogares hoy en día evolucionan con rapidez,
											requerimos espacios más funcionales, cómodos y
											seguros. Contar con proveedores especializados
											que ofrezcan soluciones eficientes, confiables y
											adecuadas es clave para mejorar la calidad de vida
											y la experiencia en el entorno doméstico.
										</p>
									</div>
									<img src={Slider2} alt="" style={{ height: '880px', width: '100%' }} />
								</div>
							)}
							{activeDetail === 3 && (
								<div className="w-full">
									<div className="py-4">
										<h4 className="text-[34px] font-semibold text-principal text-uppercase">Hogar</h4>
										<p className="text-[22px] font-medium">Explora lo que podemos hacer por tu vida diaria.</p>
										<p className='text-text text-[18px] font-light py-2'>
											Los hogares hoy en día evolucionan con rapidez,
											requerimos espacios más funcionales, cómodos y
											seguros. Contar con proveedores especializados
											que ofrezcan soluciones eficientes, confiables y
											adecuadas es clave para mejorar la calidad de vida
											y la experiencia en el entorno doméstico.
										</p>
									</div>
									<img src={Slider3} alt="" style={{ height: '880px', width: '100%' }} />
								</div>
							)}
							{activeDetail === 4 && (
								<div className="w-full">
									<div className="py-4">
										<h4 className="text-[34px] font-semibold text-principal text-uppercase">Hogar</h4>
										<p className="text-[22px] font-medium">Explora lo que podemos hacer por tu vida diaria.</p>
										<p className='text-text text-[18px] font-light py-2'>
											Los hogares hoy en día evolucionan con rapidez,
											requerimos espacios más funcionales, cómodos y
											seguros. Contar con proveedores especializados
											que ofrezcan soluciones eficientes, confiables y
											adecuadas es clave para mejorar la calidad de vida
											y la experiencia en el entorno doméstico.
										</p>
									</div>
									<img src={Slider4} alt="" style={{ height: '880px', width: '100%' }} />
								</div>
							)}

						</div>


					</section>

					<section className="w-full h-[800px] p-20 bg-cover bg-center mb-8" style={{ backgroundImage: `url(${BannerForm})` }}>
						<div className="max-w-[1360px] mx-auto">
							<div className='flex gap-20 justify-between'>
								<div className='text-white'>
									<h2 className='w-[400px] text-[34px] font-semibold'>Resolvamos los desafíos de tecnlogía <br></br>¡Comienza hoy!</h2>
									<p className='w-[270px] text-[16px]'>
										Complete el formulario a continuación y uno
										de nuestros expertos se pondrá en contacto
										con usted dentro de 24 horas para discutir
										sus necesidades.
									</p>
								</div>
								<div className='form w-[100%] max-w-[710px] rounded-3xl bg-white p-8'>
									<div className='flex gap-6 justify-between mb-6'>
										<input type="text" placeholder='Nombre*' className='rounded-lg border border-[#EBEBEB] grow px-4 py-3' />
										<input type="text" placeholder="Número de teléfono" className='rounded-lg border border-[#EBEBEB] grow px-4 py-3' />
									</div>
									<div className='flex gap-6 justify-between mb-6'>
										<input type="text" placeholder='Correo electrónico*' className='rounded-lg border border-[#EBEBEB] grow px-4 py-3' />
										<input type="text" placeholder="Nombre de la empresa" className='rounded-lg border border-[#EBEBEB] grow px-4 py-3' />
									</div>
									<div className='flex gap-6 justify-between mb-6'>
										<input type="text" placeholder='¿En qué podemos ayudarle?*' className='rounded-lg border border-[#EBEBEB] grow px-4 py-3' />
										<input type="text" placeholder="Número de empleados" className='rounded-lg border border-[#EBEBEB] grow px-4 py-3' />
									</div>
									<div>
										<textarea name="" id="" rows={9} className='rounded-lg border border-[#EBEBEB] w-full px-4 py-3'></textarea>
										<p className='text-center text-purple text-[14px] mt-4'>
											Sus datos están seguros con nosotros.<br></br>
											Nunca compartimos su información y solo la usamos para servirle mejor.
										</p>
										<div className='flex justify-center'>
											<a className='button button--secondary' href="" style={{ padding: '11px 20px', marginBottom: 0 }}>Lea más sobre nosotros</a>
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