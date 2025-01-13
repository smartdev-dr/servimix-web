import { Services } from "../home/DataCards/CardsData"
import Image from "next/image"

const ServiceGallery = () => {
    return (
      <div className="flex gap-5 my-5 w-full">
        {/* Sección superior */}
        <div className="">
          {/* Imagen */}
          <div className="max-w-[800px] h-[400px] bg-gray-300 rounded-lg"></div>
          <div className="grid grid-cols-5 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-5">
          <div className="bg-gray-300 w-[100px] h-[30] rounded-lg"></div>
          <div className="bg-gray-300 w-[100px] h-16 rounded-lg"></div>
          <div className="bg-gray-300 w-[100px] h-16 rounded-lg"></div>
          <div className="bg-gray-300 w-[100px] h-16 rounded-lg"></div>
          <div className="bg-gray-300 w-[100px] h-16 rounded-lg"></div>
        </div>
          
    
        </div>
              {/* Texto */}
              <div className="">
            <h2 className="text-3xl font-bold text-gray-800">Lavado de autos adomicilio</h2>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec <br /> elementum libero lacus, sed dapibus lacus euismod ac. 
              In ultrices, <br /> diam at pretium dignissim, diam magna vehicula nisi, feugiat commodo <br /> odio urna vitae diam. Pellentesque 
              porttitor turpis at porttitor sagittis. <br /> Donec tincidunt.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 '>
                {Services.map((service) => (
                 <div key={service.id} className='bg-white rounded-xl  overflow-hidden'> 
                    <div className='flex items-center p-4 '>
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
    )
  }
  
  export default ServiceGallery