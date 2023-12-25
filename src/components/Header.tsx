"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import logo from '../../public/quick-bite.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
function Header() {
    const [isScroll, setIsScroll] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [open, setOpen] = useState(false);

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

    return (
        <header className={`transition-all duration-700 fixed top-0 w-full z-50 flex items-center bg-transparent bg-gradient-to-b from-black to-transparent ${isScroll ? 'h-[68px]' : 'h-32'}`} >
            <nav style={{ transition: `background-color 350ms ${isScroll ? '350ms' : '0ms'}` }}
                className={`flex gap-4 item-center flex-row py-5 justify-between px-10 max-md:px-8 max-sm:px-4  ${isScroll ? " bg-black/80 backdrop-blur-sm  " : "bg-transparent"} w-full h-fit`}>
                <div className=' w-80 '>
                    <Image src={logo} alt='Logo' width={10} height={10} className={` transition-all duration-700 ${isScroll ? "w-20 h-10 " : "w-40 h-20"}  aspect-auto`} />
                </div>
                <div className={`hidden text-5xl text-white max-lg:flex max-lg:items-center max-lg:justify-center max-lg:text-4xl`}
                    onClick={() => setOpen(true)}>
                    <GiHamburgerMenu />
                </div>
                <div className={` transition-all duration-500 max-lg:absolute max-lg:bg-black/100 max-lg:w-full max-lg:left-0 max-lg:top-0 py-5 max-lg:min-h-screen z-50 max-lg:pt-10 
                 ${open ? "  max-lg:flex" : "max-lg:hidden"}  `}>
                    <div className=' hidden max-lg:inline-block absolute  w-20 h-10 top-8 right-0 text-white text-4xl ' onClick={()=>setOpen(false)}><RxCross1 /></div>
                    <ul className='flex flex-row items-center [&>*]:text-xl  [&>*]:text-gray-200  flex-1 justify-center gap-10 max-lg:flex-col  '>
                        <li className='hover:text-gray-400' onClick={() => setOpen(false)}><Link
                            href={'/'} >Home</Link></li>
                        <li className='hover:text-gray-400' onClick={() => setOpen(false)}><Link
                            href={'/services'} >Services</Link></li>
                        <li className='hover:text-gray-400' onClick={() => setOpen(false)}><Link
                            href={'/services'} >Gallery</Link></li>
                        <li className='hover:text-gray-400' onClick={() => setOpen(false)}><Link
                            href={'/services'} >About</Link></li>
                        <li className='hover:text-gray-400' onClick={() => setOpen(false)}><Link
                            href={'/services'} >Contact</Link></li>
                    </ul>
                </div>
                {/* <div>
                    <button onClick={toggleFullscreen}>
                        {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                    </button>
                </div> */}
            </nav>
        </header>
    );
}

export default Header;

