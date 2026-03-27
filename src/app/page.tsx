import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-hidden">
      {/* Background Decoration - spans behind both Navbar and Hero */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[691px] lg:h-[787px] z-0 pointer-events-none">
        <Image
          src="/images/Decore.png"
          alt=""
          fill
          className="object-contain object-top-right"
          priority
        />
      </div>

      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}
