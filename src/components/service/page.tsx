const Service = () => {
  return (
    <div className="w-full p-6 ">
      {/* Sección superior */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Imagen */}
        <div className="flex-shrink-0 w-[417] h-[274] bg-gray-300 rounded-lg"></div>
        
        {/* Texto */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Compañia de Servicio Pago</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec <br /> elementum libero lacus, sed dapibus lacus euismod ac. 
            In ultrices, <br /> diam at pretium dignissim, diam magna vehicula nisi, feugiat commodo <br /> odio urna vitae diam. Pellentesque 
            porttitor turpis at porttitor sagittis. <br /> Donec tincidunt.
          </p>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="mt-8 w-10/12 h-64 bg-gray-300 rounded-lg"></div>
    </div>
  )
}

export default Service