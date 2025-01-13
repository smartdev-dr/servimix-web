'use client'
import Banner from "@/components/home/banner";
import { ServicesSection } from "@/components/home/Cards/MainCards";
import MainCompany from "@/components/home/MainCompany";
import { MainServices } from "@/components/home/MainContent";
import MainOffers from "@/components/home/MainOffers";



function App() {
  return (


    <>
      <Banner />
      <MainOffers />
      <ServicesSection />
      <MainServices />
      <MainCompany />

    </>



    // <div>
    //   "Aqui Julio elimina esto y has el landing page"
    //   <Link href="/dashboard">
    //     <Button>Go to dashboard</Button>
    //   </Link>
    //   <Link href="/login">
    //     <Button>Go to Login</Button>
    //   </Link>
    //   <Link href="/signup">
    //     <Button>Go to SignUp</Button>
    //   </Link>
    // </div>
  )
}

export default App;