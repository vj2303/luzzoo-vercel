"use client"


import Image from "next/image"
import SalonCard from "./SalonCard"
import axios from "axios"
import { useEffect, useState } from "react"
import { ShimmerSimpleGallery, ShimmerThumbnail } from "react-shimmer-effects"

//   {
//     name: "JCB (Jean-Claude Biguine)",
//     image: "/SalonPhotos/JCB.webp",
//     link: "/salon/jcb"

//   },

//   {
//     name: "BBlunt",
//     image: "/SalonPhotos/bblunt.webp",
//     link: "/salon/bblunt"

//   },
//   {
//     name: "Lemon",
//     image: "/SalonPhotos/lemon.webp",
//     link: "/salon/lemon"

//   },
//   {
//     name: "Juice",
//     image: "/SalonPhotos/juice,ghatkopar.webp",
//     link: "/salon/juice"

//   },
//   {
//     name: "K Prive",
//     image: "/SalonPhotos/Kprive.webp",
//     link: "/salon/kprive"

//   },
//   {
//     name: "Fashion TV",
//     image: "/SalonPhotos/FTV.webp",
//     link: "/salon/fashiontv"

//   },

//   {
//     name: "The First",
//     image: "/SalonPhotos/TheFirst.webp",
//     link: "/salon/the-first"

//   },
//   {
//     name: "BodyCraft",
//     image: "/SalonPhotos/BodyCraft.webp",
//     link: "/salon/bodycraft"

//   },
//   {
//     name: "Harsha & Rakesh",
//     image: "/SalonPhotos/HarshaRakesh.webp",
//     link: "/salon/harsha-and-rakesh"

//   },
//   {
//     name: "Toni & Guy",
//     image: "/SalonPhotos/toninguy.webp",
//     link: "/salon/toni-and-guy"

//   },
//   {
//     name: "LookWell",
//     image: "/SalonPhotos/LookWell.webp",
//     link: "/salon/lookwell"

//   },
//   {
//     name: "Femina Flaunt",
//     image: "/SalonPhotos/feminaflaunt.webp",
//     link: "/salon/femina-flaunt"

//   },
//   {
//     name: "Tip & Toe",
//     image: "/SalonPhotos/timntoe.webp",
//     link: "/salon/tip-and-toe"

//   },
//   {
//     name: "JCO (Jean Claude Olivier)",
//     image: "/SalonPhotos/JCO.webp",
//     link: "/salon/jco"

//   },
//   {
//     name: "Tattva Spa",
//     image: "/SalonPhotos/TattvaSpa.webp",
//     link: "/salon/tattva"

//   },
//   {
//     name: "Apple",
//     image: "/SalonPhotos/Apple(The Original).webp",
//     link: "/salon/apple"

//   },
//   {
//     name: "CocoMelon",
//     image: "/SalonPhotos/Apple(The Original).webp",
//     link: "/salon/cocomelon"

//   },
//   {
//     name: "House Of Bumble",
//     image: "/SalonPhotos/HouseOfBumble.webp",
//     link: "/salon/houseofbumble"

//   },
// ]


// const data = await 
function Salons() {
  const [salons, setSalons] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getda = async () => {
      try {
        const res = await axios({
          method: 'get',
          url: `${process.env.NEXT_PUBLIC_HOST}/api/v1/salonFamily/list`,
        });
        setSalons(res.data.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getda();
  }, []);

  // const res = await axios({
  //   method: "get",
  //   url: "https://ts1.luzo.app/api/v1/salonFamily/list",
  // })
  // const salons = res.data.data
  // console.log({salons});
  return (
    <div className="px-[10px] sm:px-[120px] mt-[100px]">
      <h1 className="font-medium text-[30px]">All Partners</h1>
      <div className="flex flex-wrap gap-[20px] cursor-pointer py-[20px]">
  {loading ? (
    Array.from({ length: 21 }).map((_, index) => (
      <ShimmerThumbnail 
        key={index} 
        height={200} 
        width={390}
        rounded 
        className=""
      />
    ))
  ) : (
    salons?.map((salon, i) => (
      <SalonCard salon={salon} key={i} />
    ))
  )}
</div>
      <h1 className="font-medium sm:text-[28px] text-[20px] text-center">To view more partners download the app now!</h1>
      <div className="flex items-center   justify-center gap-[20px] py-[20px]">
        <Image src="/img/appstore.webp" alt="img" width={150} height={60} />
        <Image src="/img/playstore.webp" alt="img" width={150} height={60} />
      </div>
    </div>
  )
}

export default Salons