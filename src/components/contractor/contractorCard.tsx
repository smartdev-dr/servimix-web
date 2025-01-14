import Image from "next/image"
import { Services } from "../home/DataCards/CardsData"

export const ContractorCard = () => {
    return (
        
        <div>
            <div className=" h-[257px] bg-gray-300 rounded-lg md:col-span-2"></div>
            <div className='md:flex grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 mt-10'>
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
            

        
    
    )


}