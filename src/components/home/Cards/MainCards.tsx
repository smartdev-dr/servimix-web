import Image from 'next/image';
import { Services } from '../DataCards/CardsData';

export const ServicesSection =() => {
    return (
        <section className='py-10 md:px-10'>
            <div className='text-center mb-10'>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>Los mejores calificados</h2>
                <p className='text-gray-500 mb-10'> Los servicios mejor calificados por nuestros clientes</p>
                <div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                        {Services.map((service) => (
                            <div key={service.id} className='bg-white rounded-xl shadow-lg overflow-hidden'>
                                <div className='relative w-full h-64'>
                                    <Image
                                    src={service.image}
                                    alt={service.titulo}
                                    layout='fill'
                                    objectFit='cover'
                                    className='rounded-t-xl'/>
                                </div>
                                <div className='p-4'>
                                    <h3 className='text-lg font-bold text-gray-900'>{service.titulo}</h3>
                                    <div className='flex items-center text-sm text-gray-500 my-2'>
                                        <span>{service.ubicacion}</span>
                                        <span className='mr-2'>📍</span>
                                    </div>
                                    <p className='text-sm text-gray-500'>{service.descripcion}</p>
                                </div>
                                <div className='flex items-center p-4 border-t border-gray-200'>
                                    <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                                        <Image 
                                        src={service.provider.avatar}
                                        alt={service.provider.name}
                                        layout='fill'
                                        objectFit='cover'/>
                                    </div>
                                    <div className='ml-4'>
                                        <p className='text-sm font-bold text-gray-900'> {service.provider.name} </p>
                                        <div className='flex items-center text-sm text-gray-500'>
                                            <span className='text-yellow-500 mr-1'> {"★".repeat(service.provider.rating)}</span>
                                            <span>{service.provider.reviews} reviews</span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        ))}
                        
                    </div>
                    
                </div>
            </div>
        </section>
    )
}