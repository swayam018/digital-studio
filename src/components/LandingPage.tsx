"use client"
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';
import bgimage from '../../public/bg-image.jpeg';
import { BsPlusLg } from 'react-icons/bs';

function LandingPage() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const { blur } = useSpring({
    blur: isMouseOver ? 10 : 0, // Set the blur intensity
  });

  return (
    <React.Fragment>
      <div
        className="min-h-screen h-full bg-gray-500 relative w-full overflow-hidden"
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <animated.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${bgimage.src})`,
            backgroundSize: 'cover',
            filter: blur.to((val) => `blur(${val}px)`),
            transition: 'filter 0.5s ease', // Apply smooth transition
          }}
        />
        <div className="z-10 text-white relative min-h-screen flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="text-7xl relative py-5 px-4 max-md:text-5xl text-center">
            Visual Stories, Unveiling Emotions
            <div className="w-8 h-8 absolute top-0 left-0 border-l-4 border-t-4 border-white"></div>
            <div className="w-8 h-8 absolute bottom-0 left-0 border-l-4 border-b-4 border-white"></div>
            <div className="w-8 h-8 absolute bottom-0 right-0 border-r-4 border-b-4 border-white"></div>
            <div className="w-8 h-8 absolute top-0 right-0 border-r-4 border-t-4 border-white"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
