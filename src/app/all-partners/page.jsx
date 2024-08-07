import Navbar from "@/components/Navbar"
import Salons from "./Salons"
import Footer from "@/components/Footer"
import DownloadPopUp from "@/components/DownloadPopUp"
import ScrollToTop from "@/components/ScrollToTop"

const AllSalons = () => {
  return (
    <div>
      <Navbar />
      <Salons />
      <Footer />
      <ScrollToTop />
      <DownloadPopUp />
    </div>
  )
}

export default AllSalons