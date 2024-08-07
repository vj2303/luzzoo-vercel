"use client"

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link"

const SalonCrousal = () => {

    const salonGroups = [
        [
            { href: '/salon/Harsha Rakesh', imgSrc: '/Logos-Website/1.jpg' },
            { href: '/salon/Bodycraft', imgSrc: '/Logos-Website/2.jpg' }
        ],
        [
            { href: '/salon/Looks', imgSrc: '/Logos-Website/3.jpg' },
            { href: '/salon/bodycraft', imgSrc: '/Logos-Website/4.png' },
        ],
        [
            { href: '/salon/Toni and Guy', imgSrc: '/Logos-Website/5.jpg' },
            { href: '/salon/juice', imgSrc: '/Logos-Website/4.png' },
        ],
        [
            { href: '/salon/Aveda x Nykaa', imgSrc: '/Logos-Website/7.jpg' },
            { href: '/salon/juice', imgSrc: '/Logos-Website/6.png' },
        ],
        [
            { href: '/salon/juice', imgSrc: '/Logos-Website/8.png' },
            { href: '/salon/Femina Flaunt', imgSrc: '/Logos-Website/9.png' }
        ],
        [
            { href: '/salon/juice', imgSrc: '/Logos-Website/10.png' },
            { href: '/salon/bodycraft', imgSrc: '/Logos-Website/11.png' }
        ],
        [
            { href: '/salon/Nailashes', imgSrc: '/Logos-Website/12.png' },
            { href: '/salon/bodycraft', imgSrc: '/Logos-Website/13.png' }
        ],
        [
            { href: '/salon/juice', imgSrc: '/Logos-Website/14.png' },
            { href: '/salon/LookWell', imgSrc: '/Logos-Website/15.png' }
        ],
        [
            { href: '/salon/Cut and Style', imgSrc: '/Logos-Website/16.png' },
            { href: '/salon/bodycraft', imgSrc: '/Logos-Website/17.png' }
        ],
        [
            { href: '/salon/Kapils', imgSrc: '/Logos-Website/18.png' },
            { href: '/salon/bodycraft', imgSrc: '/Logos-Website/19.png' }
        ],
        [
            { href: '/salon/juice', imgSrc: '/Logos-Website/20.png' },
            { href: '/salon/Tip and Toe', imgSrc: '/Logos-Website/21.png' }
        ],
        // Add more salon groups here
    ];


    return (
        <div className=' px-[10px] my-[30px] sm:my-[60px] 2xl:max-w-[1300px] xl:max-w-[1200px] lg:max-w-[1000px] sm:mx-auto relative'>
            <h1 className='font-bold sm:text-[30px] text-[20px] mb-4 text-[#051036] '>700+ Salons | Spas | Dermatologists</h1>
            {/* <div> */}

            <div className='flex gap-[20px]'>
                <button className='prev'><ChevronLeft /></button>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    navigation={{ nextEl: ".next", prevEl: ".prev" }}
                    loop={true}

                    modules={[Autoplay, Navigation]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        // When window width is <= 640px (for mobile devices)
                        640: {
                            slidesPerView: 4,
                        },
                    }}
                >

                    {salonGroups.map((group, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col gap-[20px]'>
                                {group.map((salon, idx) => (
                                    <Link key={idx} href={salon.href}>
                                        <Image src={salon.imgSrc} width={324} height={182} alt='salon' className='aspect-video rounded-md' />
                                    </Link>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            <button className='next'><ChevronRight /></button>
            </div>

            {/* </div> */}
            {/* <div className='flex justify-between  items-center sm:px-[20%] mt-8'> */}

            {/* <div className=' flex flex-row gap-[20px] sm:gap-[100px]'>

<p className='flex gap-[5px]'><Image src="/img/pin.svg" width={20} height={20} alt='img'  />Mumbai</p>
<p className='flex gap-[5px]'><Image src="/img/pin.svg" width={20} height={20} alt='img'  />Pune</p>
<p className='flex gap-[5px]'><Image src="/img/pin.svg" width={20} height={20} alt='img'  />Bangalore</p>
                </div> */}
            {/* </div> */}

        </div>
    )
}

export default SalonCrousal