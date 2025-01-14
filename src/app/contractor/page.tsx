import { ContractorCard } from "@/components/contractor/contractorCard"
import { MainServices } from "@/components/home/MainContent"
import ReseñasCard from "@/components/service/reseñasCard"

const Contractor = () => {
  return (
    <div className="md:p-10">
        <ContractorCard/>
        <ReseñasCard titulo="Reseñas del contratista"/>
        <MainServices titulo="Servicios"/>   
        <button className="justify-center py-2 text-center bg-primary-500 text-white border border-gray-300 font-bold rounded-lg bg-orange-400 mt-10 mb-10 w-full">Solicitar cotización</button>


    </div>
  )
}
export default Contractor