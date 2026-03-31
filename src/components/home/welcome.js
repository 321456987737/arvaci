"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Welcome = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center  items-center gap-4  md:items-center  Arimo md:px-12 px-6 py-12 md:py-0">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            
          viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-gray-500"
          >
            Welcome
          </motion.p>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold leading-tight mb-4"
        >
          Where every cup <br /> tells a story
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-600 max-w-md "
        >
          Crafted from carefully selected beans and roasted to perfection, our
          coffee is more than a drink — it’s an experience of rich aroma, bold
          flavor, and comforting warmth in every sip.
        </motion.p>
      </div>

      {/* RIGHT SIDE GRID */}
      <div className="w-full overflow-hidden md:h-screen md:w-1/2 grid md:grid-cols-12 md:grid-rows-12 grid-cols-5 grid-rows-11  md:gap-4 gap-2 md:py-10 pb-6  px-2 md:px-0 h-125 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}

          
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="md:col-start-3 md:col-end-7 md:row-start-2 md:row-end-8 col-span-4 row-span-4"
        >
          <Image
            src="/welcome/1.jpg"
            alt="coffee"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="md:col-start-7 md:col-end-12 md:row-start-5 md:row-end-10 col-span-2 row-span-7 row-start-5"
        >
          <Image
            src="/welcome/3.jpg"
            alt="coffee"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="md:col-start-2 md:col-end-7 md:row-start-8 md:row-end-12 col-span-3 row-span-5 col-start-3 row-start-5"
        >
          <Image
            src="/welcome/2.jpg"
            alt="coffee"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="md:hidden flex col-start-3 col-end-6  row-start-10 row-end-12 w-full h-full  ">
          <div className="flex items-center justify-center w-full ">
            <h2 className="text-5xl Arimo">

          ARVACI
            </h2>
          </div>
        </div>
        <div className="md:hidden flex col-start-5 col-end-6  row-start-1 row-end-5    rotate-270    ">
          <div className="flex items-center justify-center   ">
            <h2 className="text-xl Arimo">

          Welcome
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Welcome;


  /* <div className="w-full md:w-1/2 grid grid-cols-12 grid-rows-12 gap-4 py-10 px-4 md:px-0 h-[500px] md:h-auto">
    <div className="col-start-3 col-end-7 row-start-2 row-end-8">
      <Image
        src="/herosection.jpeg"
        alt="coffee"
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="col-start-7 col-end-12 row-start-5 row-end-10">
      <Image
        src="/herosection.jpeg"
        alt="coffee"
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="col-start-2 col-end-7 row-start-8 row-end-12">
      <Image
        src="/herosection.jpeg"
        alt="coffee"
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>
  </div> */
