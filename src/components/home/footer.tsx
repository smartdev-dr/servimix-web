import Image from "next/image";

const Footer = () => {
    return (
      <footer className="bg-gray-100 border-t border-gray-300 py-10">
        <div className="max-w-7xl mx-auto py-6 px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
             <div className="flex items-center space-x-2 mb-10 ">
                        <Image src="/logo.png" width="50" height="59" alt="" />
                        
                        <div>
                            <h1>SERVIMIX</h1>
                            <small>De lo que necesitas, a quien lo hace</small>
                            
                            
                        </div>
                       
                       
                    </div>         
          </div>
        </div>
        <div className=" h-[1px] bg-gray-400 ml-10"></div>
      </footer>
    );
  };
  
  export default Footer;