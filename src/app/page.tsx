'use client'
import Banner from "@/components/home/banner";
import { ServicesSection } from "@/components/home/Cards/MainCards";
import Footer from "@/components/home/footer";
import MainCompany from "@/components/home/MainCompany";
import { MainServices } from "@/components/home/MainContent";
import MainOffers from "@/components/home/MainOffers";
import { Navbar } from "@/components/home/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";


function App() {
  return (


    <>
      <Navbar />
      <Banner />
      <MainOffers />
      <ServicesSection />
      <MainServices />
      <MainCompany />
      <Footer />
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