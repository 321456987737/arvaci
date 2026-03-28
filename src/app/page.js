
// import Herosection from "@/components/home/herosection";
import HeroSection from "@/components/herosection";
import Welcome from "@/components/home/welcome";
import Menusection from "@/components/home/menusection";
import About from "@/components/home/about";
import Gallery from "@/components/home/gallery";
import CoffeeQuality from "@/components/home/quality";
import TeamCarousel from "@/components/home/baristacarousals";
export default function Home() {
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
    <div className=" ">  
       <HeroSection
      title="WELCOME TO ARVACI"
      description="By day we serve amazing healthy breakfasts, lunch and light supper, together with freshly pressed juices."
      video="/videos/mainvideo.mp4"
    />
      <Welcome/>
      <Menusection/>
      <About/>
      <Gallery/>
      <TeamCarousel slides={slides} />
      <CoffeeQuality/>
    </div>
  );
}
