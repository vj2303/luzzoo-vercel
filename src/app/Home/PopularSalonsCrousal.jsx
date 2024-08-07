"use client"

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/bundle"
import CustomPagination from './CustomPagination';
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const PopularSalonsCrousal = () => {
    const count = 6;
    const renderPagination = () => {
        const items = [];
        for (let i = 0; i < count; i++) {
            items.push(
                <div
                    key={i}
                    className={`pagination-item`}
                ></div>
            );
        }
        return items;
    };

    const salons = [
        {
            name: 'BBlunt',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/1.jpg'
        },
        {
            name: 'bodycraft',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/2.jpg'
        },
        {
            name: 'Looks Salon',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/3.jpg'
        },
        {
            name: 'enrich',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/4.png'
        },
        {
            name: 'Toni & Guy',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/5.jpg'
        },
        {
            name: 'JCB',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/6.png'
        },
        {
            name: 'Lifestyle Salon',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/7.jpg'
        },
        {
            name: 'HM Salon',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/8.png'
        },
        {
            name: 'Femina and Flaunt',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/9.png'
        },
        {
            name: 'Elixir',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/10.png'
        },
        {
            name: 'Dessange Paris',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/11.png'
        },
        {
            name: 'Nailashes',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/12.png'
        },
        {
            name: 'Affinity Elite',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/13.png'
        },

        {
            name: 'Wellness Salon',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/14.png'
        },

        {
            name: 'Lookwell',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/15.png'
        },

        {
            name: 'Cut & Style',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/16.png'
        },

        {
            name: 'Tattva Salon',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/17.png'
        },

        {
            name: 'Kapils salon ',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/18.png'
        },
        {
            name: 'monsoon salon',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/19.png'
        },
        {
            name: 'skuooll',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/20.png'
        },
        {
            name: 'Tip & Toe',
            href: '/salon/jcb',
            imgSrc: '/Logos-Website/21.png'
        },


    ];



    return (
        <>

            <div className=' px-[10px] my-[60px] relative 2xl:max-w-[1300px] xl:max-w-[1200px] lg:max-w-[1000px] sm:mx-auto'>
                <div className='flex justify-between mb-[20px]'>
                    <h1 className='font-bold text-[30px] '>Popular Partners</h1>
                    <Link href='/all-partners'> <button className='hide_on_large hover:text-[white] text-blue-600 bg-[#3554D10D] px-[10px] py-[10px] hover:bg-[#3554D1] '> <span className='flex gap-[10px]'>View All <ArrowUpRight /> </span>   </button>
                    </Link>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation={{ nextEl: ".popular_next", prevEl: ".popular_prev" }}
                    loop={true}
                    pagination={{ clickable: true, el: '.custom-pagination', bulletClass: "pagination-item", bulletActiveClass: "pagination-active-item" }}

                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        // When window width is <= 640px (for mobile devices)
                        640: {
                            slidesPerView: 4,
                        },
                    }}
                >

                    {salons.map((salon, index) => (
                        <SwiperSlide key={index}>
                            <Link href={salon.href}>
                                <div className='relative flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                    <Image src={salon.imgSrc} width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                    {/* <div className='absolute inset-0 bg-[#2D1010] opacity-15'></div> */}
                                    <h1 className='text-[#444444] text-[30px] font-medium absolute bottom-0 left-0 px-4 py-2'>{salon.name}</h1>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}

                    {/* <SwiperSlide>
                        <Link href='/salon/jcb'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/JCB.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>JCB (Jean-Claude Biguine) </h1>
                            </div>
                        </Link>
                    </SwiperSlide>
                    

                    <SwiperSlide>
                        <Link href='/salon/tattva'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden '>
                                <Image src='/SalonPhotos/TattvaSpa.webp' width={360} height={172}  alt='salon' className='aspect-video transform hover:scale-110 transition duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Tattva Spa</h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    
                    <SwiperSlide>
                        <Link href='/salon/fashiontv'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/FTV.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Fashion TV</h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    
                    <SwiperSlide>
                        <Link href='/salon/harsha-and-rakesh'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/HarshaRakesh.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Harsha & Rakesh</h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href='/salon/juice'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/juice,ghatkopar.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Juice </h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    

                    <SwiperSlide>
                        <Link href='/salon/bblunt'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/bblunt.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>BBlunt</h1>
                            </div>
                        </Link>
                    </SwiperSlide>


                    <SwiperSlide>
                        <Link href='/salon/apple'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/Apple(The Original).webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Apple</h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href='/salon/bodycraft'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/BodyCraft.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>BodyCraft</h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href='/salon/cocomelon'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/Cocomelon.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>CocoMelon</h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href='/salon/femina-flaunt'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/feminaflaunt.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Femina Flaunt</h1>
                            </div>
                        </Link>
                    </SwiperSlide>



                    <SwiperSlide>
                        <Link href='/salon/the-first'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/TheFirst.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>The First </h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href='/salon/tip-and-toe'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/timntoe.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Tip & Toe</h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href='/salon/toni-and-guy'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/toninguy.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Toni & Guy </h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    
                    <SwiperSlide>
                        <Link href='/salon/lookwell'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/LookWell.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>LookWell </h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    
                    <SwiperSlide>
                        <Link href='/salon/kprive'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/Kprive.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Kprive </h1>
                            </div>
                        </Link>
                    </SwiperSlide>

                    

                    
                    <SwiperSlide>
                        <Link href='/salon/lemon'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/lemon.webp' alt='salon' width={360} height={172} className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>Lemon </h1>
                            </div>
                        </Link>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Link href='/salon/houseofbumble'>
                            <div className='flex flex-col gap-[20px] rounded-xl overflow-hidden'>
                                <Image src='/SalonPhotos/HouseOfBumble.webp' width={360} height={172} alt='salon' className='aspect-video transform hover:scale-110 transition  duration-300 ease-in-out' />
                                <h1 className='text-white text-[30px] font-medium absolute bottom-0 left-0  px-4 py-2'>House Of Bumble </h1>
                            </div>
                        </Link>
                    </SwiperSlide> */}

                </Swiper>


                <button className='popular_prev p-2 hidden sm:block shadow rounded-full  absolute left-[-25px] top-[50%] z-10 text-[white] bg-blue-500'><ChevronLeft /> </button>
                <button className='popular_next p-2 hidden sm:block shadow rounded-full absolute right-[-25px] top-[50%] z-10  text-[white] bg-blue-500'><ChevronRight /> </button>

                <div className="custom-pagination">
                    {renderPagination()}
                </div>
                <Link href='/all-partners'>
                    <button className='hide_on_small hover:text-[white] text-blue-600 bg-[#3554D10D] px-[10px] py-[10px] hover:bg-[#3554D1]'>
                        <span className='flex gap-[10px]'>View All Salons <ArrowUpRight /> </span>
                    </button>
                </Link>
            </div>

        </>
    )
}

export default PopularSalonsCrousal