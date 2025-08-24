import BannerForm from '../../assets/img/banner-form.webp';

const Form = () => {

	return (
		<div>
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
	)
}

export default Form