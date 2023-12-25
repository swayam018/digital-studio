import Image from 'next/image'
import React from 'react'
import photography from '../../public/service-1.jpg';
import bgimage from '../../public/bg-image.jpeg';
const array = [1, 2, 3];

function Team() {
    return (
        <div className='  backdrop-blur-xl bg-black/80 pb-5 '>
            <div className=' pt-8 text-5xl text-white text-center'>Our Team</div>
            <div className=' pt-8 flex justify-around flex-wrap gap-4'>
                {array.map((item, index) => (
                    <div className=' w-80 h-fit  relative rounded-md bg-black pb-4 text-white' key={index} >
                        <Image src={bgimage} alt='banner' width={400} height={20} className=' w-80 h-28 object-cover  rounded-t-md' />
                        <Image src={photography} alt='member' width={100} height={80} className='w-20 h-20 rounded-full absolute inset-y-1/3 inset-x-[116px]' />
                        <div className=' mt-12  flex flex-col items-center text-xl font-semibold '>
                            <div className='tracking-wider text-xl'>Sonu Subrat</div>
                            <div className=' font-thin text-lg'>Photographer</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team 