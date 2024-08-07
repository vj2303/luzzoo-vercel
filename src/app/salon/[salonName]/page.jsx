import DownloadLinks from '@/components/DownloadLinks'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
// import { useParams } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import ScrollToTop from '@/components/ScrollToTop'
import DownloadPopUp from '@/components/DownloadPopUp'
import { ChevronRight } from 'lucide-react';
import Link from 'next/link'
import axios from 'axios'
import { ShimmerThumbnail } from "react-shimmer-effects";

// Fetching data on the server side
async function fetchData(salonName) {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/salonFamily/salonDetails?salonFamilyName=${salonName}`);
        console.log({res: res.data, salonName});
        return res.data.data;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

const Salon = async ({ params }) => {

    const { salonName } = params;
    const salon = await fetchData(salonName);

    return (
        <>
            <Navbar />
            {salon !== null ? <div>
                <div>
                    <Image src={salon.salons[0].salon_cover_photo} alt='img' width={2200} height={200} className="col-12 w-full rounded-4 aspect-w-16 aspect-h-9 h-[380px] object-fill" />

                    <div className="sm:px-[100px] px-[10px] sm:leading-[30px] ">
                        <h1 className=" text-[50px] py-[20px] sm:mt-[10px]">{salon.salons[0].salon_name}</h1>
                        <div>
                            <p className="text-[16px] sm:leading-[30px] my-[20px]">{salon.about}</p>
                        </div>
                    </div>

                    <div className="sm:px-[100px] px-[10px] my-[20px]">
                        <h1 className="font-medium sm:my-[20px] text-[20px]">{salon.name} Branches</h1>
                        <div className="flex sm:flex-row flex-col flex-wrap gap-[30px]">
                            {
                                salon.salons.map((ele) => {
                                    return <div key={ele} className="border sm:w-[30%]  text-[14px] border-[#B9B9B9] rounded px-[30px] py-[8px]  shadow-sm flex gap-[20px] items-center">
                                        <Image src="/img/pin.svg" alt='img' height={20} width={20} /><p className="py-[10px] ">{ele.salon_location}</p>  <span className='sm:hidden ml-auto'> <Link href="https://salons.luzo.app/igVKahpDgZHGNP3y9"><ChevronRight /></Link></span>
                                    </div>
                                })
                            }
                        </div>


                    </div>
                </div>
                <DownloadLinks className={"items-center justify-center mb-[60px] py-[15px]"} />
            </div> : (
                <ShimmerThumbnail height={250} rounded />
            )}


            <Footer />
            <ScrollToTop />
            <DownloadPopUp />
        </>
    )
}

export default Salon