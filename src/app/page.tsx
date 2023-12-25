import LandingPage from "@/components/LandingPage";
import Image from "next/image";
import React from "react";

import Services from "@/components/Services";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className=' max-w-7xl min-w-full '>
      <LandingPage />
      <Services/>
      <Team/>
      <Gallery/>
      <Contact/>
    </main>
  )
}
