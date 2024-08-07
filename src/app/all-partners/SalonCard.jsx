import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SalonCard = ({ salon }) => {
    return (
        <Link href={`/salon/${salon.salon_family_name}`} className={"sm:w-[32%]"}>
            <div className='flex flex-col gap-[20px] shadow-md relative rounded-xl overflow-hidden'>
                <Image src={salon.salon_cover_photo_url} alt='salon' width={600} height={230} className='aspect-video  transform hover:scale-110 transition duration-300 ease-in-out' />
                <h1 className='text-white text-[26px] font-medium absolute bottom-0 left-0  px-4 py-2'>{salon.salon_family_name}</h1>
            </div>
        </Link>
    )
}

export default SalonCard