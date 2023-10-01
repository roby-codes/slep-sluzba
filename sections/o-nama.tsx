"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import GrayTowTruckImage from "@/public/assets/images/gray-tow-truck.jpg";
import GrayTowTruckTwoImage from "@/public/assets/images/gray-tow-truck-two.jpg";
import RedTowTruckImage from "@/public/assets/images/red-tow-truck.jpg";

const imageAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.15 * index,
    },
  }),
};

const IntroSection = () => (
  <section className="flex flex-col items-center justify-center pt-40 pb-20 lg:pt-60 lg:pb-40 px-8 bg-slate-50 bg-opacity-75">
    <div className="max-w-5xl flex-1 flex flex-col justify-center items-center md:gap-2 gap-0 relative z-20 text-center">
      <motion.h1
        className="text-6xl lg:text-7xl font-semibold"
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        Šlep Služba
      </motion.h1>
      <motion.h2
        className="pt-2 text-2xl font-medium"
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        Veliko Gradište - Towing Service
      </motion.h2>
      <motion.p
        className="py-5 text-lg font-light"
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.15,
          duration: 0.5,
        }}
      >
        Šlep služba Veliko Gradište je posvećena pružanju najkvalitetnijih šlep
        usluga našim korisnicima. Veliko iskustvo u ovoj oblasti osigurava da je
        vaše vozilo u sigurnim rukama. Ukažite nam vaše poverenje, a mi ćemo vam
        zagarantovati pouzdanu uslugu. Kontaktirajte nas već danas i spoznajte
        mir koji vam donosi saznanje da ste u dobrim rukama
      </motion.p>
      <motion.button
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
          duration: 0.5,
        }}
      >
        <a
          className="flex py-3 px-5 gap-2 rounded-md items-center uppercase font-semibold text-white bg-[--theme-blue] hover:bg-[--theme-lightblue] hover:-rotate-2 hover:scale-110 duration-200"
          href="tel:0651185542"
          aria-label="Pozovite Sada"
        >
          <FiPhoneCall className="h-5 w-5" /> Pozovite Sada
        </a>
      </motion.button>
    </div>
    <div className="max-w-5xl flex justify-center items-stretch flex-wrap gap-4 pt-8">
      <motion.div
        className="w-[350px] md:w-[450px] h-[18rem] rounded-md overflow-hidden relative"
        variants={imageAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={0}
        viewport={{
          once: true,
        }}
      >
        <Image
          className="hover:scale-105 duration-200"
          layout="fill"
          objectFit="cover"
          src={GrayTowTruckImage}
          alt="Gray Tow Truck Image"
          placeholder="blur"
        />
      </motion.div>
      <motion.div
        className="w-[350px] md:w-[450px] h-[18rem] rounded-md overflow-hidden relative"
        variants={imageAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={1}
        viewport={{
          once: true,
        }}
      >
        <Image
          className="hover:scale-105 duration-200"
          layout="fill"
          objectFit="cover"
          src={RedTowTruckImage}
          alt="Red Tow Truck Image"
          placeholder="blur"
        />
      </motion.div>
      <motion.div
        className="w-[350px] md:w-[450px] h-[18rem] rounded-md overflow-hidden relative"
        variants={imageAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={2}
        viewport={{
          once: true,
        }}
      >
        <Image
          className="hover:scale-105 duration-200"
          layout="fill"
          objectFit="cover"
          src={GrayTowTruckTwoImage}
          alt="Gray Tow Two Truck Image"
          placeholder="blur"
        />
      </motion.div>
    </div>
  </section>
);

export { IntroSection };
