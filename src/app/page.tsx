"use client"
import LandingPage from "@/components/LandingPage";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import logo from '../../public/quick-bite.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


export default function Home() {
  const [isScroll, setIsScroll] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [open, setOpen] = useState(false);
  const landingRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const serviceRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleFullscreen = () => {
    const element = window.document.documentElement;
    console.log(element);

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      }
    } else {
      if (window.document.exitFullscreen) {
        window.document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const fullscreenChangeHandler = () => {
      setIsFullscreen(!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', fullscreenChangeHandler);

    return () => {
      document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
    }
  }, []);

  const onScrollHandler= (eleref:any)=>{
    window.scrollTo({top:eleref.current.offsetTop,behavior:"smooth"});
  }


  return (
    <>
      <header className={`transition-all duration-700 fixed top-0 w-full z-50 flex items-center bg-transparent bg-gradient-to-b from-black to-transparent ${isScroll ? 'h-20' : 'h-32'}`} >
        <nav style={{ transition: `background-color 350ms ${isScroll ? '350ms' : '0ms'}` }}
          className={`flex gap-4 item-center flex-row justify-between px-10 max-md:px-8 max-sm:px-4  ${isScroll ? " bg-black/80 backdrop-blur-sm  " : "bg-transparent"} w-full h-fit`}>
          <div className=' w-80 h-16 flex items-center '>
            <Image src={logo} alt='Logo' width={100} height={10} className={` transition-all duration-700 ${isScroll ? "w-20 h-10 " : "w-40 h-10"}  aspect-auto`} />
          </div>
          <div className={`hidden text-5xl text-white max-lg:flex max-lg:items-center max-lg:justify-center max-lg:text-4xl`}
            onClick={() => setOpen(true)}>
            <GiHamburgerMenu />
          </div>
          <div className={` transition-all duration-500 max-lg:absolute max-lg:bg-black/100 max-lg:w-full max-lg:left-0 max-lg:top-0 py-5 max-lg:min-h-screen z-50 max-lg:pt-10 
                 ${open ? "  max-lg:flex" : "max-lg:hidden"} `}>
            <div className=' hidden max-lg:inline-block absolute  w-20 h-10 top-8 right-0 text-white text-4xl ' onClick={() => setOpen(false)}><RxCross1 /></div>
            <ul className='flex flex-row items-center [&>*]:text-xl  [&>*]:text-gray-200  flex-1 justify-center gap-10 max-lg:flex-col  '>
              <li className='hover:text-gray-400' onClick={() => setOpen(false)}><span onClick={()=>onScrollHandler(landingRef)} >Home</span></li>
              <li className='hover:text-gray-400' onClick={() => setOpen(false)}><span onClick={()=>onScrollHandler(serviceRef)} >Services</span></li>
              <li className='hover:text-gray-400' onClick={() => setOpen(false)}><span onClick={()=>onScrollHandler(galleryRef)} >Gallery</span></li>
              <li className='hover:text-gray-400' onClick={() => setOpen(false)}><span onClick={()=>onScrollHandler(aboutRef)} >About</span></li>
              <li className='hover:text-gray-400' onClick={() => setOpen(false)}><span onClick={()=>onScrollHandler(contactRef)} >Contact</span></li>
            </ul>
          </div>
        </nav>
      </header>
      <main className=' max-w-7xl min-w-full '>
        <div ref={landingRef}>
          <LandingPage />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={serviceRef}>
          <Services />
        </div>
        <div ref={galleryRef}>
          <Gallery />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
    </>
  )
}
