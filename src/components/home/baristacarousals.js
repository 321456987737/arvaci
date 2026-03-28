"use client";

import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function HeightScaleCarouselAlt({ slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    duration: 20,
  });

  const minHeightPercent = 40; // percentage of carousel height
  const maxHeightPercent = 100;

  const minDistance = (progress, snap) => {
    const distances = [
      Math.abs(progress - snap),
      Math.abs(progress - (snap - 1)),
      Math.abs(progress - (snap + 1)),
    ];
    return Math.min(...distances);
  };

  const applyHeightEffect = useCallback(() => {
    if (!emblaApi) return;

    const scrollProgress = emblaApi.scrollProgress();
    const snaps = emblaApi.scrollSnapList();
    const slideNodes = emblaApi.slideNodes();

    slideNodes.forEach((slideNode, index) => {
      // Find the inner wrapper that will change height
      const heightWrapper = slideNode.querySelector(".heightWrapper");
      if (!heightWrapper) return;

      const snap = snaps[index % snaps.length];
      const distance = minDistance(scrollProgress, snap);

      // Map distance (0 to ~0.5) to height percentage (max to min)
      const effectiveDistance = Math.min(distance * 1.2, 0.5);
      const heightPercent =
        maxHeightPercent -
        (effectiveDistance / 0.5) * (maxHeightPercent - minHeightPercent);
      const finalPercent = Math.max(
        minHeightPercent,
        Math.min(maxHeightPercent, heightPercent),
      );

      heightWrapper.style.height = `${finalPercent}%`;
    });
  }, [emblaApi, minHeightPercent, maxHeightPercent]);

  useEffect(() => {
    if (!emblaApi) return;
    applyHeightEffect();
    emblaApi.on("scroll", applyHeightEffect);
    emblaApi.on("resize", applyHeightEffect);
    return () => {
      emblaApi.off("scroll", applyHeightEffect);
      emblaApi.off("resize", applyHeightEffect);
    };
  }, [emblaApi, applyHeightEffect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <div className="md:h-screen h-[90vh] md:my-20 my-8 w-full  flex flex-col items-center justify-center">
      <div className=" w-full items-center flex  justify-center flex-col text-center px-3 ">
        <motion.p
          initial={{ opacity: 0.5, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-gray-500"
        >
          About Workers
        </motion.p>

        <motion.h2
          initial={{ opacity: 0.5, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-5xl Arimo max-w-125 font-semibold mt-3 Arimo leading-tight"
        >
          The People Behind Your Perfect Cup
        </motion.h2>

        <motion.p
          initial={{ opacity: 0.5, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-4 text-gray-600 leading-relaxed max-w-162.5"
        >
          Our skilled baristas craft every cup with passion, precision, and a
          deep appreciation for great coffee, carefully preparing each drink to
          deliver a rich and memorable experience.
        </motion.p>
      </div>

      <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            
          viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.6 }} className="embla md:w-[80%] w-full ">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide " key={index}>
                {/* The wrapper that changes height */}
                <div className="heightWrapper  relative">
                  <Image
                    src={slide.img}
                    alt={slide.name}
                    width={400}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                  <div className=" bg-[#F9F7F5] absolute bottom-0 rounded-tr-2xl rounded-tl-2xl">
                    {/* Content container – this stays the same size relative to the wrapper */}
                    <div className="content text-center px-2 Arimo ">
                      {slide.name}
                    </div>
                    <div className="content text-center px-2 Arimo">
                      {slide.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      < motion.div 
      
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            
          viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.7, duration: 0.6 }} className="mb-8 flex gap-4">
        <button
          className="embla__button  bg-white rounded-full h-12 w-12 text-4xl flex items-center justify-center"
          onClick={scrollPrev}
        >
          <ChevronLeft />
        </button>

        <button
          className="embla__button bg-white rounded-full h-12 w-12 text-4xl flex items-center justify-center"
          onClick={scrollNext}
        >
          <ChevronRight />
        </button>
      </motion.div>
    </div>
  );
}
