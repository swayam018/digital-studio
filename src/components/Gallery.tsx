"use client"
import React, { useEffect, useRef, useState } from 'react'
import camera from '../../public/bg-image.jpeg'
import cameraphoto from '../../public/camera photo.webp'
import Image from 'next/image'
import bridalportrait from '../../public/Bridal-Portraits.jpg'
import wedding from '../../public/wedding.jpg';
import ring from '../../public/gallery-bridal.jpg';
import prephotoshoot from '../../public/prephotoshoot.jpg';
import galleryring from '../../public/galleryring.jpg';
import mehndi from '../../public/mehndi.jpg';
import bridel from '../../public/download (1).jpg'

function Gallery() {
    return (
        <div  className=' bg-black/80 px-4 pb-10'>
            <div className=' text-4xl font-bold tracking-tight text-white sm:text-4xl text-center py-8'>Gallery</div>
            <div className="grid grid-cols-2 grid-rows-7 md:grid-rows-4 md:grid-cols-4 gap-2 md:gap-4 h-[200vh] max-md:h-[250vh] max-sm:h-[200vh] max-[430px]:h-[160vh]">
                <div className="bg-indigo-100 col-span-1  md:col-span-2 overflow-hidden">
                    <Image src={wedding} alt="gallery" width={500} height={10} className=' w-full  aspect-square object-cover min-h-full  ' />
                </div>
                <div className="bg-fuchsia-100 max-md:row-span-2 md:col-span-2 row-span-1 md:row-span-2 overflow-hidden">
                    <Image src={ring} alt="gallery" width={500} height={10} className=' w-full  aspect-square object-cover min-h-full' />
                </div>
                <div className="bg-violet-100 overflow-hidden">
                    <Image src={prephotoshoot} alt="gallery" width={500} height={10} className=' w-full  aspect-square object-cover min-h-full' />
                </div>
                <div className="bg-sky-100 max-md:col-span-2 overflow-hidden">
                    <Image src={galleryring} alt="gallery" width={500} height={10} className=' w-full  aspect-square object-cover min-h-full ' />
                </div>
                <div className="bg-purple-100  md:col-span-2 md:row-span-2 overflow-hidden">
                    <Image src={bridalportrait} alt="gallery" width={500} height={10} className=' w-full  aspect-square object-cover min-h-full' />
                </div>
                <div className="bg-violet-100 max-md:row-span-3 overflow-hidden">
                    <Image src={camera} alt="gallery" width={500} height={10} className=' w-full  aspect-square object-cover min-h-full' />
                </div>
                <div className="bg-sky-100 max-md:row-span-2 md:row-span-2  overflow-hidden">
                    <Image src={prephotoshoot} alt="gallery" width={500} height={10} className=' w-full  aspect-square object-cover min-h-full ' />
                </div>
                <div className="bg-sky-100 max-md:col-span-2  overflow-hidden">
                    <Image src={mehndi} alt="gallery" width={500} height={10} className=' w-full  aspect-square object-cover min-h-full ' />
                </div>
            </div>
        </div>
    )
}

export default Gallery