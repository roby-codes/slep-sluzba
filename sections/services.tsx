"use client";

import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
import { BsTools } from "react-icons/bs";

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

const fadeInAnimationVariants = {
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
        Our Services
      </motion.h1>
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
        At Šlep služba Veliko Gradište, we provide a range of towing services to
        help you when you need it the most. Whether you need a tow truck to
        transport your vehicle to a nearby mechanic, or require roadside
        assistance, we are here to help. Our services include:
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
    <div className="w-full max-w-5xl pt-8 flex justify-center gap-8 flex-wrap">
      <motion.div
        className="py-8 px-4 min-w-[300px] max-w-xs flex-1 flex flex-col items-center gap-4 bg-white rounded-md shadow-sm"
        whileInView="animate"
        variants={fadeInAnimationVariants}
        initial="initial"
        custom={0}
        viewport={{
          once: true,
        }}
      >
        <span className="rounded-full p-4 bg-[--theme-blue] text-white">
          <BsTools className="h-6 w-6" />
        </span>
        <h2 className="font-semibold uppercase text-xl text-[--theme-blue]">
          Emergency Towing
        </h2>
        <p className="text-black/75 text-center">
          Our emergency towing service is available 24/7, so you can rely on us
          whenever you need us. We have a fleet of tow trucks that can handle
          any size of vehicle, and our team is trained to safely and efficiently
          transport your vehicle to a destination of your choice.
        </p>
      </motion.div>
      <motion.div
        className="py-8 px-4 min-w-[300px] max-w-xs flex-1 flex flex-col items-center gap-4 bg-white rounded-md shadow-sm"
        whileInView="animate"
        variants={fadeInAnimationVariants}
        initial="initial"
        custom={1}
        viewport={{
          once: true,
        }}
      >
        <span className="rounded-full p-4 bg-[--theme-blue] text-white">
          <BsTools className="h-6 w-6" />
        </span>
        <h2 className="font-semibold uppercase text-xl text-[--theme-blue]">
          Vehicle Transport
        </h2>
        <p className="text-black/75 text-center">
          We offer vehicle transport services for those who need to move their
          car, truck, or motorcycle to a different location. Our team will
          safely load your vehicle onto our tow truck and transport it to your
          desired destination.
        </p>
      </motion.div>
      <motion.div
        className="py-8 px-4 min-w-[300px] max-w-xs flex-1 flex flex-col items-center gap-4 bg-white rounded-md shadow-sm"
        whileInView="animate"
        variants={fadeInAnimationVariants}
        initial="initial"
        custom={2}
        viewport={{
          once: true,
        }}
      >
        <span className="rounded-full p-4 bg-[--theme-blue] text-white">
          <BsTools className="h-6 w-6" />
        </span>
        <h2 className="font-semibold uppercase text-xl text-[--theme-blue]">
          Heavy-duty Towing
        </h2>
        <p className="text-black/75 text-center">
          We also offer heavy-duty towing services for larger vehicles such as
          buses, RVs, and construction equipment. Our team is equipped with the
          necessary tools and expertise to handle any heavy-duty towing job.
        </p>
      </motion.div>
      <motion.div
        className="py-8 px-4 min-w-[300px] max-w-xs flex-1 flex flex-col items-center gap-4 bg-white rounded-md shadow-sm"
        whileInView="animate"
        variants={fadeInAnimationVariants}
        initial="initial"
        custom={3}
        viewport={{
          once: true,
        }}
      >
        <span className="rounded-full p-4 bg-[--theme-blue] text-white">
          <BsTools className="h-6 w-6" />
        </span>
        <h2 className="font-semibold uppercase text-xl text-[--theme-blue]">
          Roadside Assistance
        </h2>
        <p className="text-black/75 text-center">
          If you&apos;re stranded on the side of the road due to a flat tire,
          dead battery, or any other issue, we can help. Our team of experts can
          come to your location and provide roadside assistance to get you back
          on the road as quickly as possible.
        </p>
      </motion.div>
      <motion.div
        className="py-8 px-4 min-w-[300px] max-w-xs flex-1 flex flex-col items-center gap-4 bg-white rounded-md shadow-sm"
        whileInView="animate"
        variants={fadeInAnimationVariants}
        initial="initial"
        custom={4}
        viewport={{
          once: true,
        }}
      >
        <span className="rounded-full p-4 bg-[--theme-blue] text-white">
          <BsTools className="h-6 w-6" />
        </span>
        <h2 className="font-semibold uppercase text-xl text-[--theme-blue]">
          Junk Car Removal
        </h2>
        <p className="text-black/75 text-center">
          If you have an old, unwanted vehicle taking up space on your property,
          we can help. Our junk car removal service will come to your location,
          remove the vehicle, and dispose of it in an environmentally-friendly
          manner.
        </p>
      </motion.div>
      <motion.div
        className="py-8 px-4 min-w-[300px] max-w-xs flex-1 flex flex-col items-center gap-4 bg-white rounded-md shadow-sm"
        whileInView="animate"
        variants={fadeInAnimationVariants}
        initial="initial"
        custom={5}
        viewport={{
          once: true,
        }}
      >
        <span className="rounded-full p-4 bg-[--theme-blue] text-white">
          <BsTools className="h-6 w-6" />
        </span>
        <h2 className="font-semibold uppercase text-xl text-[--theme-blue]">
          Book Now
        </h2>
        <p className="text-black/75 text-center">
          If you need any of our towing services, don&apos;t hesitate to contact
          us. You can book our services online or give us a call, and we&apos;ll
          be there to help you in no time.
        </p>
      </motion.div>
    </div>
  </section>
);

export { IntroSection };
