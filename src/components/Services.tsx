import Image from 'next/image'
import React from 'react'
import wedding from '../../public/wedding-couple.png';
import ring from '../../public/wedding-ring.png'
import photography from '../../public/service-1.jpg';
import videography from '../../public/service-2.jpg'
import editing from '../../public/service-3.jpg';

const ServicesOffer = [
  { image: wedding, title: "Wedding Photgraphy", description: "We focus on creating timeless and captivating photos that narrate the unique story of your love. Using a mix of candid moments and thoughtfully composed shots, we make sure to preserve every detail.", icon: undefined },
  { image: ring, title: "Engagement  Photgraphy", description: " From natural snapshots that showcase your unique connection to beautifully crafted portraits, we weave a visual story that captures the joy and excitement of your engagement. Let us turn your emotions into timeless images, creating a collection of memories that will endure.", icon: undefined },
  { image: ring, title: "Personal Photgraphy", description: "Capturing your true personality and story, crafting a personalized visual tale. From standout portraits that showcase your unique self to genuine candid shots that capture your real spirit, we aim to create images that feel authentic to you.", icon: "" },
  // {image:undefined,title:" Photgraphy",description:"Capturing your true personality and story, crafting a personalized visual tale. From standout portraits that showcase your unique self to genuine candid shots that capture your real spirit, we aim to create images that feel authentic to you.",icon:""}
]

function Services() {
  return (
    <div className=' backdrop-blur-2xl bg-black/80 pb-5 '>
      <div className=" text-4xl font-bold tracking-tight text-white sm:text-4xl text-center pt-8">Our Services</div>
      <div className=' flex flex-row gap-8  w-full flex-wrap justify-around pt-8 [&>*]:bg-black text-t-primary '>
        <div className=" w-80 p-2 rounded-md flex flex-col items-center gap-2 hover:shadow-normal hover:shadow-purple-950   max-lg:hover:shadow-none" >
          <Image src={photography} alt="Services" width={320} height={250} className=" rounded-md" />
          <span className=' text-white'>SHOOTING</span>
          <span className=" text-center text-t-primary">We focus on creating timeless and captivating photos that narrate the unique story of your love. Using a mix of candid moments and thoughtfully composed shots, we make sure to preserve every detail.</span>
        </div>
        <div className=" w-80 p-2 rounded-md flex flex-col items-center gap-2 bg-slate-950 hover:shadow-normal hover:shadow-purple-950  max-lg:hover:shadow-none" >
          <Image src={videography} alt="Services" width={320} height={250} className=" rounded-md" />
          <span className=' text-white'>VIDEO</span>
          <span className=" text-center  text-t-primary">From natural snapshots that showcase your unique connection to beautifully crafted portraits, we weave a visual story that captures the joy and excitement of your engagement. Let us turn your emotions into timeless images, creating a collection of memories that will endure.</span>
        </div>
        <div className=" w-80 p-2 rounded-md flex flex-col items-center gap-2 bg-slate-950  hover:shadow-normal hover:shadow-purple-950  max-lg:hover:shadow-none" >
          <Image src={editing} alt="Services" width={320} height={250} className=" rounded-md" />
          <span className=' text-white'>Editing</span>
          <span className=" text-center  text-t-primary">Capturing your true personality and story, crafting a personalized visual tale. From standout portraits that showcase your unique self to genuine candid shots that capture your real spirit, we aim to create images that feel authentic to you.</span>
        </div>
        {ServicesOffer.map((service, index) => (
          <div key={index} className='w-80 bg-slate-950 p-4 space-y-2 hover:shadow-normal hover:shadow-purple-950 rounded-md   max-lg:hover:shadow-none'>
            <div className=' flex items-center gap-4 '>
              <Image src={service.image || service.icon} alt='wedding' width={50} height={50} />
              <div className=' text-xl text-white'>{service.title}</div>
            </div>
            <div className=' pl-4  text-t-primary'>{service.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services