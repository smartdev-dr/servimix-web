import ReseñasCard from "@/components/service/reseñasCard"
import ServiceGallery from "@/components/service/servicePage"
import VariacionesCard from "@/components/service/varionesCard"

const Service = () => {
  return (
    <div className="md:p-10">
    <ServiceGallery/>
    <VariacionesCard/>
    <ReseñasCard/>
    </div>
  )
}

export default Service