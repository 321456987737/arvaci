"use client";

import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";

import Faqs from "@/components/contact/faqs";
import HeroSection from "@/components/herosection";
import ContactForm from "@/components/contact/contact";
import ContactMap from "@/components/contact/location";

export default function ContactPage() {

  // 🔥 Reusable animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <HeroSection
        title="WELCOME TO ARVACI"
        description="By day we serve amazing healthy breakfasts, lunch and light supper, together with freshly pressed juices."
        image="/contact/contact image.jpg"
      />

      {/* CONTACT INFO */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-10"
      >

        {[{
          icon: MapPin,
          title: "Visit Us",
          text: <>123 Coffee Street <br /> Karachi, Pakistan</>
        },
        {
          icon: Phone,
          title: "Call Us",
          text: "+92 300 1234567"
        },
        {
          icon: Mail,
          title: "Email Us",
          text: "hello@coffeecafe.com"
        }].map((itemData, i) => {
          const Icon = itemData.icon;

          return (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center text-center space-y-4"
            >

              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Icon size={40} />
              </motion.div>

              <motion.h3 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }} className="text-xl font-semibold">
                {itemData.title}
              </motion.h3>

              <motion.p 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }} className="text-gray-600">
                {itemData.text}
              </motion.p>

            </motion.div>
          );
        })}

      </motion.section>

      {/* CONTACT FORM */}
      <motion.div
        // variants={fadeUp}
        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: true }}
      >
        <ContactForm />
      </motion.div>

      {/* GOOGLE MAP */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <ContactMap />
      </motion.div>

      {/* SOCIAL MEDIA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 text-center"
      >

        <motion.h2 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }} className="text-3xl font-bold mb-6 Arimo">
          Follow Us
        </motion.h2>

        <motion.p 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4, dela:0.3 }}
                viewport={{ once: true }} className="text-gray-600 mb-8">
          Stay connected and get the latest updates from our cafe.
        </motion.p>

        < motion.div 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4, delay:0.5 }}
                viewport={{ once: true }} className="flex justify-center gap-8">
          
          {[Facebook, Instagram, Twitter].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.3, y: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <Icon size={30} />
            </motion.div>
          ))}

        </motion.div>

      </motion.section>

      {/* FAQ */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Faqs />
      </motion.div>

    </div>
  );
}

// "use client"

// import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"
// import Faqs from "@/components/contact/faqs"
// // import Herosection from "@/components/contact/herosection"
// import HeroSection from "@/components/herosection"
// import ContactForm from "@/components/contact/contact"
// import ContactMap from "@/components/contact/location"
// export default function ContactPage() {
//   return (
//     <div className="w-full">

//       {/* HERO SECTION */}
//        <HeroSection
//                title="WELCOME TO ARVACI"
//                description="By day we serve amazing healthy breakfasts, lunch and light supper, together with freshly pressed juices."
//               //  video="/videos/videoplayback (6).mp4"
//                image="/contact/contact image.jpg"
//              />

//       {/* CONTACT INFO */}
//       <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-10">

//         <div className="flex flex-col items-center text-center space-y-4">
//           <MapPin size={40} />
//           <h3 className="text-xl font-semibold">Visit Us</h3>
//           <p className="text-gray-600">
//             123 Coffee Street <br />
//             Karachi, Pakistan
//           </p>
//         </div>

//         <div className="flex flex-col items-center text-center space-y-4">
//           <Phone size={40} />
//           <h3 className="text-xl font-semibold">Call Us</h3>
//           <p className="text-gray-600">
//             +92 300 1234567
//           </p>
//         </div>

//         <div className="flex flex-col items-center text-center space-y-4">
//           <Mail size={40} />
//           <h3 className="text-xl font-semibold">Email Us</h3>
//           <p className="text-gray-600">
//             hello@coffeecafe.com
//           </p>
//         </div>

//       </section>


//       {/* CONTACT FORM */}
//      <ContactForm/>


//       {/* GOOGLE MAP */}
//       <ContactMap />


//       {/* SOCIAL MEDIA */}
//       <section className="py-20 text-center">

//         <h2 className="text-3xl font-bold mb-6">
//           Follow Us
//         </h2>

//         <p className="text-gray-600 mb-8">
//           Stay connected and get the latest updates from our cafe.
//         </p>

//         <div className="flex justify-center gap-8">
//           <Facebook size={30} className="cursor-pointer hover:text-blue-600" />
//           <Instagram size={30} className="cursor-pointer hover:text-pink-500" />
//           <Twitter size={30} className="cursor-pointer hover:text-sky-500" />
//         </div>

//       </section>


//       {/* FAQ */}
//       {/* <section className="max-w-4xl mx-auto py-20 px-6"> */}
//         <Faqs />
//       {/* </section> */}

//     </div>
//   )
// }