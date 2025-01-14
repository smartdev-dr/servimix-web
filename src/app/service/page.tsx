import ReseñasCard from "@/components/service/reseñasCard"
import ServiceGallery from "@/components/service/servicePage"
import VariacionesCard from "@/components/service/varionesCard"

const Service = () => {
  return (
    <div className="md:p-10">
    <ServiceGallery/>
    <VariacionesCard/>
    <ReseñasCard titulo="Reseñas del servicio"/>
    <button className="justify-center py-2 text-center bg-primary-500 text-white border border-gray-300 font-bold rounded-lg bg-orange-400 mt-10 mb-10 w-full">Solicitar servicio</button>
    </div>
  )
}

export default Service