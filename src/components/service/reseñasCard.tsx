const ReseñasCard = () => {
    return (
        <>
        <h1 className="text-3xl font-bold text-gray-800 mt-20">Reseñas del servicio</h1>
        <h2 className="text-3xl font-bold text-gray-600">5.0/<small className="text-gray-400">5.0</small></h2>
        <div className="flex gap-5 mt-10 sm:grid-cols-2 md:grid-cols-5">
          <div className="bg-gray-300 w-[230px] h-[100px] rounded-lg"></div>
          <div className="bg-gray-300 w-[230px] h-[100px] rounded-lg"></div>
          <div className="bg-gray-300 w-[230px] h-[100px] rounded-lg"></div>
          <div className="bg-gray-300 w-[230px] h-[100px] rounded-lg"></div>
          </div>
          

          <button className="justify-center py-2 text-center bg-primary-500 text-white border border-gray-300 font-bold rounded-lg bg-orange-400 mt-10 mb-10 w-full">Solicitar servicio</button>
        
        </>
        
    
    
    )
}

export default ReseñasCard
