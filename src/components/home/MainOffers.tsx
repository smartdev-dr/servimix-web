const MainOffers = () => {
    return (
      <section className="py-8">
        {/* Título */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Principales ofertas</h2>
          <p className="text-gray-500">Aprovecha las oportunidades</p>
        </div>
  
        {/* Contenedor flexible */}
        <div className="flex justify-between items-center space-x-8 pl-10 pr-20">
          {/* Primera tarjeta */}
          <div className="bg-gray-300 rounded-lg flex-grow h-80"></div>
  
          {/* Segunda tarjeta */}
          <div className="bg-gray-300 rounded-lg flex-grow h-80 relative">
            {/* Flecha */}
        
            <button
              className=" absolute -right-14 top-1/2 transform -translate-y-2/3 bg-blue-900 text-white w-10 h-10 rounded-full flex justify-center items-center"
              aria-label="Ver más"
            >
              &rarr;
            </button>

        
          </div>
        </div>
      </section>
    );
  };
  
  export default MainOffers;