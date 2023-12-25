import React from 'react'
import camera from '../../public/bg-image.jpeg'
import cameraphoto from '../../public/camera photo.webp'
import Image from 'next/image'
function Gallery() {
    return (
        <div className=' bg-black/80 px-4 pb-10 ' >
            <div className=' text-white text-5xl py-8 text-center'>Gallery</div>
            <div className="grid grid-cols-2 grid-rows-3 md:grid-rows-4 md:grid-cols-4 gap-2 md:gap-4 h-[200vh]">
                <div className="bg-indigo-100 col-span-1 md:col-span-2 overflow-hidden">
                    <Image src={camera} alt="gallery" width={500} height={10} className=' w-full  aspect-square object-cover min-h-full ' />
                </div>
                <div className="bg-fuchsia-100 col-span-1 md:col-span-2 row-span-1 md:row-span-2 overflow-hidden">
                    <Image src={camera} alt="gallery" width={500} height={10} className=' w-full  aspect-square object-cover min-h-full' />
                </div>
                <div className="bg-violet-100 overflow-hidden">
                    <Image src={cameraphoto} alt="gallery" width={500} height={10} className=' w-full  aspect-square object-cover min-h-full' />
                </div>
                <div className="bg-sky-100 overflow-hidden">
                    <Image src={camera} alt="gallery" width={500} height={10} className=' w-full  aspect-square object-cover min-h-full ' />
                </div>
                <div className="bg-purple-100 col-span-1 md:col-span-2 md:row-span-2 overflow-hidden">
                    <Image src={camera} alt="gallery" width={500} height={10} className=' w-full  aspect-square object-cover min-h-full' />
                </div>
                <div className="bg-emerald-100 col-span-1 md:col-span-2   overflow-hidden">
                    <Image src={camera} alt="gallery" width={500} height={10} className=' w-full  aspect-square object-cover  min-h-full' />
                </div>
                <div className="bg-violet-100 overflow-hidden">
                    <Image src={cameraphoto} alt="gallery" width={500} height={10} className=' w-full  aspect-square object-cover min-h-full' />
                </div>
                <div className="bg-sky-100 overflow-hidden">
                    <Image src={camera} alt="gallery" width={500} height={10} className=' w-full  aspect-square object-cover min-h-full ' />
                </div>

            </div>
        </div>
    )
}

export default Gallery