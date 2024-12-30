import Image from "next/image"


export const Navbar = () => {
  return (
    <header className="w-full border-b" >
        <div className="bg-gray-100 text-gray-600 text-sm py-2" >
            <div className="container mx-auto px-4 flex justify-between">
                <span>Santo Domingo, Republica Dominicana</span>
            </div>
        </div>
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
            <img src="/logo.png" width="50" height="59" alt="" />
            <div>
                <h1>SERVIMIX</h1>
                <p>De lo que necesitas, a quien lo hace</p>
            </div>
        </div>
        <div className="flex-1 px-4">
            <div className="relative">
                <input type="text" 
                placeholder="Buscar Servicio"
                className="w-full border rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring focus:ring-orange-400 text-center "/>
                 <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
              <Image src="/svg/search.svg" width={20} height={20} alt="Icon-buscar"/>
            </span>

            </div>

        </div>

        

        
      
    </nav>
    </header>
  )
}



// className="w-full border-b"
// className="bg-gray-100 text-gray-600 text-sm py-2"
// className="container mx-auto px-4 flex justify-between"