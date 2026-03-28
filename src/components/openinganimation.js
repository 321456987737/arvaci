"use client";
import React,{useEffect} from "react";
import { motion } from "framer-motion";

export default function Openinganimation() {

  const slices = [0,1,2,3]
useEffect(() => {
  document.body.style.overflow = "hidden";

  const timer = setTimeout(() => {
    document.body.style.overflow = "auto";
  }, 4000); // match your animation duration

  return () => {
    document.body.style.overflow = "auto";
    clearTimeout(timer);
  };
}, []);
  // CONTROL TIMING HERE
  const baseDelay = 3.5
  const sliceGap = 0.25   

  return (
      
    // <div className="h-screen w-full overflow-hidden absolute inset-0 z-1000 pointer-events-none">
    <div className="h-screen w-full overflow-hidden fixed inset-0 z-1000 pointer-events-none">

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 2,
          ease: [0.1,0.4,0.1,1],
          delay: baseDelay
        }}
        className="relative h-screen w-full"
      >

        {/* 4 SLICE SECTIONS */}
        {slices.map((i)=>(
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{
              duration:2,
              delay: baseDelay + i * sliceGap
            }}
            className="absolute top-0 h-full bg-[#F9F7F5]"
            style={{
              left:`${i*25}%`,
              width:"25%"
            }}
          />
        ))}

        {/* MOVING BOX */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ["1%", "20%", "60%", "70%", "100%"] }}
          transition={{
            duration: 2.5,
            times: [0, 0.25, 0.5, 0.75, 1],
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute left-1/2 z-1000 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F9F7F5] h-50 w-72"
        />

        {/* LOGO */}
        <div className="absolute z-999 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="350"
            height="60"
            fill="none"
            viewBox="0 0 533 117"
          >

            <path
              fill="#000"
              d="M21.3125 115.614h-20.5l57.5-114.49993L115.812 115.614H94.3125l-36-72.9999zM235.312 1.11407h-21l57 114.49993 57-114.49993h-21l-36 71.49993zM298.812 115.614l57.5-114.49993 58.5 114.49993h-21l-37.5-71.9999-36 71.9999zM489.312 30.1141l13-12.5s-19.019-15.72182-35-16.50003c-32.96-1.60507-63.795 26.52613-62.5 59.50003 1.248 31.7618 28.275 56.9649 60 54.9999 16.13-.999 37.5-17.5 37.5-17.5l-13-12.5c-4.5 11.4876-56.5 24.988-65-24.9999 3.5-53.51254 52-43 65-30.5M532.312 1.11407h-18l-.5 113.49993 18.5 1z"
            />

            <path
              fill="#000"
              fillRule="evenodd"
              d="M121.312 1.11407V115.614h19v-38.5h32.5l22 38.5h23l-25.5-41s24-8.4983 24-36.4983c-2-18.0016-13-35.51325-33.5-37.01325-8-.500869-61.5.01162-61.5.01162m17.5 19.00003 1.5 37s33.5.5 44.5 0c2.5-.1137 13-3.5 13-17.5.583-9.2973-6-17.5-14.5-19.5-5.196-1.2992-44.5 0-44.5 0"
              clipRule="evenodd"
            />

            <path
              stroke="#000"
              d="M21.3125 115.614h-20.5l57.5-114.49993L115.812 115.614H94.3125l-36-72.9999zM235.312 1.11407h-21l57 114.49993 57-114.49993h-21l-36 71.49993zM298.812 115.614l57.5-114.49993 58.5 114.49993h-21l-37.5-71.9999-36 71.9999zM489.312 30.1141l13-12.5s-19.019-15.72182-35-16.50003c-32.96-1.60507-63.795 26.52613-62.5 59.50003 1.248 31.7618 28.275 56.9649 60 54.9999 16.13-.999 37.5-17.5 37.5-17.5l-13-12.5c-4.5 11.4876-56.5 24.988-65-24.9999 3.5-53.51254 52-43 65-30.5ZM532.312 1.11407h-18l-.5 113.49993 18.5 1z"
            />

            <path
              stroke="#000"
              d="M121.312 1.11407V115.614h19v-38.5h32.5l22 38.5h23l-25.5-41s24-8.4983 24-36.4983c-2-18.0016-13-35.51325-33.5-37.01325-8-.500869-61.5.01162-61.5.01162Zm17.5 19.00003 1.5 37s33.5.5 44.5 0c2.5-.1137 13-3.5 13-17.5.583-9.2973-6-17.5-14.5-19.5-5.196-1.2992-44.5 0-44.5 0Z"
              clipRule="evenodd"
            />

          </svg>
        </div>

        {/* LINE */}
        <div className="h-1 w-70 bg-black absolute left-1/2 top-1/2 -translate-x-1/2 mt-12 z-999" />

      </motion.div>
    </div>
    
  )
}

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// export default function Openinganimation() {

//   const slices = [0,1,2,3]

//   return (
//     <div className="h-screen w-full overflow-hidden absolute inset-0 z-[1000]">

//       {/* MAIN CONTAINER THAT MOVES */}
//       <motion.div
//         initial={{ y: 0 }}
//         animate={{ y: "-100%" }}
//         transition={{
//           duration: 2,
//           ease: [0.1,0.4,0.1,1],
//           delay: 3.5
//         }}
//         className="relative h-screen w-full"
//       >

//         {/* 4 SECTIONS */}
//         {slices.map((i)=>(
//           <motion.div
//             key={i}
//             initial={{ y: 0 }}
//             animate={{ y: "-100%" }}
//             transition={{
//               duration:2,
//               delay:3.5 + i*0.15
//             }}
//             className="absolute top-0 h-full bg-white"
//             style={{
//               left:`${i*25}%`,
//               width:"25%"
//             }}
//           />
//         ))}

//         {/* CONTENT */}
//            <motion.div
//             initial={{ x: 0 }}
//             animate={{ x: "130%", x: ["1%", "20%", "60%", "70%", "100%"] }}
//             transition={{
//               duration: 2.5,
//               times: [0, 0.25, 0.5, 0.75, 1],
//               ease: ["easeInOut"],
//               delay: 0.5,
//             }}
//             className="absolute   left-1/2 z-1000 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-50 w-72"
//           />
//         <div className="absolute z-999 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
//              <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="350"
//                 height="60"
//                 fill="none"
//                 viewBox="0 0 533 117"
//               >
//                 <path
//                   fill="#000"
//                   d="M21.3125 115.614h-20.5l57.5-114.49993L115.812 115.614H94.3125l-36-72.9999zM235.312 1.11407h-21l57 114.49993 57-114.49993h-21l-36 71.49993zM298.812 115.614l57.5-114.49993 58.5 114.49993h-21l-37.5-71.9999-36 71.9999zM489.312 30.1141l13-12.5s-19.019-15.72182-35-16.50003c-32.96-1.60507-63.795 26.52613-62.5 59.50003 1.248 31.7618 28.275 56.9649 60 54.9999 16.13-.999 37.5-17.5 37.5-17.5l-13-12.5c-4.5 11.4876-56.5 24.988-65-24.9999 3.5-53.51254 52-43 65-30.5M532.312 1.11407h-18l-.5 113.49993 18.5 1z"
//                 />
//                 <path
//                   fill="#000"
//                   fillRule="evenodd"
//                   d="M121.312 1.11407V115.614h19v-38.5h32.5l22 38.5h23l-25.5-41s24-8.4983 24-36.4983c-2-18.0016-13-35.51325-33.5-37.01325-8-.500869-61.5.01162-61.5.01162m17.5 19.00003 1.5 37s33.5.5 44.5 0c2.5-.1137 13-3.5 13-17.5.583-9.2973-6-17.5-14.5-19.5-5.196-1.2992-44.5 0-44.5 0"
//                   clipRule="evenodd"
//                 />
//                 <path
//                   stroke="#000"
//                   d="M21.3125 115.614h-20.5l57.5-114.49993L115.812 115.614H94.3125l-36-72.9999zM235.312 1.11407h-21l57 114.49993 57-114.49993h-21l-36 71.49993zM298.812 115.614l57.5-114.49993 58.5 114.49993h-21l-37.5-71.9999-36 71.9999zM489.312 30.1141l13-12.5s-19.019-15.72182-35-16.50003c-32.96-1.60507-63.795 26.52613-62.5 59.50003 1.248 31.7618 28.275 56.9649 60 54.9999 16.13-.999 37.5-17.5 37.5-17.5l-13-12.5c-4.5 11.4876-56.5 24.988-65-24.9999 3.5-53.51254 52-43 65-30.5ZM532.312 1.11407h-18l-.5 113.49993 18.5 1z"
//                 />
//                 <path
//                   stroke="#000"
//                   d="M121.312 1.11407V115.614h19v-38.5h32.5l22 38.5h23l-25.5-41s24-8.4983 24-36.4983c-2-18.0016-13-35.51325-33.5-37.01325-8-.500869-61.5.01162-61.5.01162Zm17.5 19.00003 1.5 37s33.5.5 44.5 0c2.5-.1137 13-3.5 13-17.5.583-9.2973-6-17.5-14.5-19.5-5.196-1.2992-44.5 0-44.5 0Z"
//                   clipRule="evenodd"
//                 />
//               </svg>

//         </div>

//         {/* LINE */}
//         <div className="h-1 w-[280px] bg-black absolute left-1/2 top-1/2 -translate-x-1/2 mt-12 z-999" />

//       </motion.div>
//     </div>
//   )
// }
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// export default function Openinganimation() {
//   return (
//     <>
//       <div className="h-screen w-full overflow-hidden  absolute inset-0 z-1000">
//         <motion.div
//           initial={{ x:0}}
//           animate={{ y:"-100%" }}
//           transition={{ duration: 2, ease: [0.1, 0.4, 0.1, 1], delay: 3.5 }}
//           className="w-full h-screen bg-white relative"
//         >
//           <motion.div
//             initial={{ x: 0 }}
//             animate={{ x: "130%", x: ["1%", "20%", "60%", "70%", "100%"] }}
//             transition={{
//               duration: 2.5,
//               times: [0, 0.25, 0.5, 0.75, 1],
//               ease: ["easeInOut"],
//               delay: 0.5,
//             }}
//             className="absolute  left-1/2 z-1000 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-50 w-70"
//           />
//           <div className="absolute z-999  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             {
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="350"
//                 height="60"
//                 fill="none"
//                 viewBox="0 0 533 117"
//               >
//                 <path
//                   fill="#000"
//                   d="M21.3125 115.614h-20.5l57.5-114.49993L115.812 115.614H94.3125l-36-72.9999zM235.312 1.11407h-21l57 114.49993 57-114.49993h-21l-36 71.49993zM298.812 115.614l57.5-114.49993 58.5 114.49993h-21l-37.5-71.9999-36 71.9999zM489.312 30.1141l13-12.5s-19.019-15.72182-35-16.50003c-32.96-1.60507-63.795 26.52613-62.5 59.50003 1.248 31.7618 28.275 56.9649 60 54.9999 16.13-.999 37.5-17.5 37.5-17.5l-13-12.5c-4.5 11.4876-56.5 24.988-65-24.9999 3.5-53.51254 52-43 65-30.5M532.312 1.11407h-18l-.5 113.49993 18.5 1z"
//                 />
//                 <path
//                   fill="#000"
//                   fillRule="evenodd"
//                   d="M121.312 1.11407V115.614h19v-38.5h32.5l22 38.5h23l-25.5-41s24-8.4983 24-36.4983c-2-18.0016-13-35.51325-33.5-37.01325-8-.500869-61.5.01162-61.5.01162m17.5 19.00003 1.5 37s33.5.5 44.5 0c2.5-.1137 13-3.5 13-17.5.583-9.2973-6-17.5-14.5-19.5-5.196-1.2992-44.5 0-44.5 0"
//                   clipRule="evenodd"
//                 />
//                 <path
//                   stroke="#000"
//                   d="M21.3125 115.614h-20.5l57.5-114.49993L115.812 115.614H94.3125l-36-72.9999zM235.312 1.11407h-21l57 114.49993 57-114.49993h-21l-36 71.49993zM298.812 115.614l57.5-114.49993 58.5 114.49993h-21l-37.5-71.9999-36 71.9999zM489.312 30.1141l13-12.5s-19.019-15.72182-35-16.50003c-32.96-1.60507-63.795 26.52613-62.5 59.50003 1.248 31.7618 28.275 56.9649 60 54.9999 16.13-.999 37.5-17.5 37.5-17.5l-13-12.5c-4.5 11.4876-56.5 24.988-65-24.9999 3.5-53.51254 52-43 65-30.5ZM532.312 1.11407h-18l-.5 113.49993 18.5 1z"
//                 />
//                 <path
//                   stroke="#000"
//                   d="M121.312 1.11407V115.614h19v-38.5h32.5l22 38.5h23l-25.5-41s24-8.4983 24-36.4983c-2-18.0016-13-35.51325-33.5-37.01325-8-.500869-61.5.01162-61.5.01162Zm17.5 19.00003 1.5 37s33.5.5 44.5 0c2.5-.1137 13-3.5 13-17.5.583-9.2973-6-17.5-14.5-19.5-5.196-1.2992-44.5 0-44.5 0Z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             }
//           </div>
//           <div className="h-1 w-[280px] bg-black mt-12  absolute z-999  left-1/2 top-1/2 transform -translate-x-1/2 "></div>
//         </motion.div>
//       </div>
//     </>
//   );
// }
