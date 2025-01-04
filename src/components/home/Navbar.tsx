import Image from "next/image"


export const Navbar = () => {
  return (
    <header className="w-full border-b" >
        <div className="bg-gray-100 text-gray-600 text-sm py-2" >
            <div className="container mx-auto px-4 flex justify-between">
                <span>Santo Domingo, República Dominicana</span>
            </div>
        </div>
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
            <Image src="/logo.png" width="50" height="59" alt="" />
            <div>
                <h1>SERVIMIX</h1>
                <p>De lo que necesitas, a quien lo hace</p>
            </div>
        </div>
        <div className="flex-1 px-4">
            <div className="relative">
                <input type="text" 
                placeholder="Buscar Servicio"
                className="w-full border rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring focus:ring-orange-400 text-center m-5"/>
                 <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
              <Image src="/svg/search.svg" width={20} height={20} alt="Icon-buscar"/>
            </span>
            </div>
        </div>
        <div className="flex items-center space-x-4 m-5">
            <button className="flex items-cnter space-x-1 text-gray-500 hover:text-gray-700">
                <Image src="/svg/service.svg" width={25} height={25} alt="Icon-servicio"/>
                <span>Mis servicios</span>
            </button>
            <button className="flex items-cnter space-x-1 text-gray-500 hover:text-gray-700">
                <Image src="/svg/user.svg" width={25} height={25} alt="Icon-servicio"/>
                <span>Mi cuenta</span>
            </button>
        </div> 
    </nav>
    <div className="border-t">
        <div className="container mx-auto px-4 py-2 flex space-x-20 text-gray-600">
            <button className="hover:text-gray-800 flex items-center space-x-1">
                <span>Categorias</span>
              <Image src="/svg/flechadown.svg" width={25} height={25} alt="Icon-Down"/>  
            </button>
            <button className="hover:text-gray-800 flex items-center space-x-1">
                <span>Empresas</span>
              <Image src="/svg/flechadown.svg" width={25} height={25} alt="Icon-Down"/>  
            </button>
            <button className="hover:text-gray-800 flex items-center space-x-1">
                <span>Blogs</span>
              <Image src="/svg/flechadown.svg" width={25} height={25} alt="Icon-Down"/>  
            </button>
            <button className="hover:text-gray-800 flex items-center space-x-1">
                <span>Contáctanos</span>
            </button>
        </div>

    </div>
    </header>
  )
}



// className="w-full border-b"
// className="bg-gray-100 text-gray-600 text-sm py-2"
// className="container mx-auto px-4 flex justify-between"