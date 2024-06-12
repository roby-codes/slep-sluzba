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
  <section className="flex flex-col items-center justify-center bg-slate-50 bg-opacity-75 px-8 pb-20 pt-40 lg:pb-40 lg:pt-60">
    <div className="relative z-20 flex max-w-5xl flex-1 flex-col items-center justify-center gap-0 text-center md:gap-2">
      <motion.h1
        className="text-6xl font-semibold lg:text-7xl"
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
          className="flex items-center gap-2 rounded-md bg-[--theme-blue] px-5 py-3 font-semibold uppercase text-white duration-200 hover:-rotate-2 hover:scale-110 hover:bg-[--theme-lightblue]"
          href="tel:0651185542"
          aria-label="Pozovite Sada"
        >
          <FiPhoneCall className="h-5 w-5" /> Pozovite Sada
        </a>
      </motion.button>
    </div>
    <div className="flex max-w-5xl flex-wrap items-stretch justify-center gap-4 pt-8">
      <motion.div
        className="relative h-[18rem] w-[350px] overflow-hidden rounded-md md:w-[450px]"
        variants={imageAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={0}
        viewport={{
          once: true,
        }}
      >
        <Image
          className="duration-200 hover:scale-105"
          style={{ objectFit: "cover" }}
          src={GrayTowTruckImage}
          fill
          alt="Gray Tow Truck Image"
          placeholder="blur"
        />
      </motion.div>
      <motion.div
        className="relative h-[18rem] w-[350px] overflow-hidden rounded-md md:w-[450px]"
        variants={imageAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={1}
        viewport={{
          once: true,
        }}
      >
        <Image
          className="duration-200 hover:scale-105"
          style={{ objectFit: "cover" }}
          src={RedTowTruckImage}
          fill
          alt="Red Tow Truck Image"
          placeholder="blur"
        />
      </motion.div>
      <motion.div
        className="relative h-[18rem] w-[350px] overflow-hidden rounded-md md:w-[450px]"
        variants={imageAnimationVariants}
        initial="initial"
        whileInView="animate"
        custom={2}
        viewport={{
          once: true,
        }}
      >
        <Image
          className="duration-200 hover:scale-105"
          style={{ objectFit: "cover" }}
          src={GrayTowTruckTwoImage}
          fill
          alt="Gray Tow Two Truck Image"
          placeholder="blur"
        />
      </motion.div>
    </div>
  </section>
);

export { IntroSection };
