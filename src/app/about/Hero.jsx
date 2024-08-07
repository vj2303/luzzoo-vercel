
const Hero = () => {
  return (
    <div className="py-[120px] mt-[100px] bg-[blue]"  style={{
      backgroundImage: 'url(/aboutBg.png)',
      backgroundSize: 'cover', // Adjust to cover the entire area
      backgroundPosition: 'center', // Center the image
      height: '50vh', // Full height of the viewport
      width: '100%', // Full width of the viewport
    }}>
      <h1 className="text-white text-center mx-auto sm:text-[40px] max-w-[60%] text-[30px] font-bold">Luxury you aspire</h1>
    </div>

  )
}

export default Hero