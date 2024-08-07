import Head from "next/head"
import BuyGiftcard from "./BuyGiftcard"
import Carousel from "./Carousel"
import HowToUse from "./HowToUse"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import DownloadPopUp from "@/components/DownloadPopUp"
import ScrollToTop from "@/components/ScrollToTop"


const Giftcard = () => {


  

  return (
    <div>
      <Navbar />
      <Carousel />
      <BuyGiftcard />
      <HowToUse />
      <Footer />
      
      <ScrollToTop />
      <DownloadPopUp  />

    </div>
  )
}

export default Giftcard