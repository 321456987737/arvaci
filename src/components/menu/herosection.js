"use client";
import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <div className="w-full h-full  ">
      <div className="w-full h-full relative">
        <Image
          src="/herosection.jpeg"
          alt="background image"
          width={1000}
          height={1000}
          className="w-full md:h-[80vh] h-[60vh] "
        />
        <div className="absolute inset-0  bg-black/50 z-1" />
        <div className="absolute top-1/2 left-1/2 transform z-10 -translate-x-1/2 -translate-y-1/2">
          <div>
            <h1 className="md:text-7xl text-4xl max-w-[550px] text-center Arimo text-[#F9F7F5] md:mb-18 mb-10 ">
              Where Every Cup Tells a Story
            </h1>
          </div>

          <div className=" flex items-center justify-center">
            <h3 className="md:text-lg text-sm text-center max-w-[520px] Arimo text-[#F9F7F5] ">
              Experience the perfect blend of aroma, flavor, and comfort. From freshly brewed coffee to handcrafted pastries, our café is the perfect place to relax, connect, and enjoy every sip.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;