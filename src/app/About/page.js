import React from 'react'
// import Herosection from "@/components/about/herosection"
import Ourstory from "@/components/about/ourstory"
import Ourphilosophy from "@/components/about/ourphilosophy"
import Experience from "@/components/about/experience"
import MenuHighlights from '@/components/about/MenuHighlights'
import BaristaCarousal from "@/components/home/baristacarousals"
import HeroSection from '@/components/herosection'
export default function Page () {
const slides = [
  {
    id: 1,
    img: "/barista/download(1).webp",
    name: "Alex",
    role: "Head Barista"
  },
  {
    id: 2,
    img: "/barista/download.webp",
    name: "Sara",
    role: "Coffee Expert"
  },
  {
    id: 3,
    img: "/barista/OIP.webp",
    name: "John",
    role: "Latte Artist"
  },
  {
    id: 4,
    img: "/barista/download(1).webp",
    name: "Emma",
    role: "Roasting Specialist"
  }
];
  return (
    <div>
         <HeroSection
               title="WELCOME TO ARVACI"
               description="By day we serve amazing healthy breakfasts, lunch and light supper, together with freshly pressed juices."
               video="/videos/videoplayback (6).mp4"
             />
          <Ourstory />
          <MenuHighlights />
          <Experience />
          <Ourphilosophy />
          <BaristaCarousal slides={slides}/>
    </div>
  )

}
