"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { AiTwotoneStar } from "react-icons/ai";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RedTowTruckImage from "@/public/assets/images/red-tow-truck.jpg";
import GrayTowTruckImage from "@/public/assets/images/gray-tow-truck.jpg";

const IntroSection = () => (
  <section className="flex justify-center pt-40 pb-48 lg:py-60 px-8 relative z-10">
    <div className="absolute h-full w-full inset-0 bg-black/60 pointer-events-none select-none">
      <Image
        className="h-full w-full -z-[10] pointer-events-none select-none"
        style={{ objectFit: "cover" }}
        src={RedTowTruckImage}
        fill
        priority={true}
        draggable={false}
        alt="Red Tow Truck Image"
      />
    </div>
    <div className="max-w-5xl flex-1 flex flex-col justify-center items-center md:gap-2 gap-0 relative z-20 text-center">
      <motion.h1
        className="text-6xl lg:text-7xl font-semibold text-white"
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
        className="pt-2 text-2xl font-medium text-white"
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
        Veliko Gradište
      </motion.h2>
      <motion.p
        className="py-5 text-lg font-light text-white"
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
        Mi smo pouzdan pružalac šlep usluga u Velikom Gradištu, koji nudimo
        transport i dostavu vozila i robe. Posvećeni smo pružanju odlične usluge
        i zadovoljavanju potreba naših klijenata.
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
  </section>
);

const introAnimateVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * index,
      duration: 0.5,
    },
  }),
};

const FeaturesSection = () => (
  <section className="flex justify-center py-32 lg:pt-0 bg-slate-50 bg-opacity-75 relative z-20">
    <div className="max-w-5xl absolute w-full xl:px-0 -top-[6.75rem] left-1/2 -translate-x-1/2  flex flex-col md:flex-row justify-center items-center md:gap-4 gap-0">
      <div className="flex-1 flex justify-center gap-8 flex-wrap">
        <motion.div
          className="flex-1 min-w-[300px] max-w-xs"
          variants={introAnimateVariants}
          initial="initial"
          whileInView="animate"
          custom={0}
          viewport={{
            once: true,
          }}
        >
          <Card className="h-[235px] border-b-4 border-b-[--theme-blue] shadow-sm hover:-translate-y-2 duration-500">
            <CardHeader>
              <CardTitle className="text-center">Hitan Šlep</CardTitle>
            </CardHeader>
            <CardContent className="pb-0">
              <p className="font-light">
                Spremni smo da vam uvek izađemo u susret kada su hitne situacije
                u pitanju. Imamo iskustvo i opremu da svaku situaciju držimo pod
                kontrolom.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </motion.div>
        <motion.div
          className="flex-1 min-w-[300px] max-w-xs"
          variants={introAnimateVariants}
          initial="initial"
          whileInView="animate"
          custom={1}
          viewport={{
            once: true,
          }}
        >
          <Card className="h-[235px] border-b-4 border-b-[--theme-blue] shadow-sm hover:-translate-y-2 duration-500">
            <CardHeader>
              <CardTitle className="text-center">Transport vozila</CardTitle>
            </CardHeader>
            <CardContent className="pb-0">
              <p className="font-light">
                Nudimo siguran i pozdan transport vaših automobila, motora,
                radnih mašina, itd.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </motion.div>
        <motion.div
          className="flex-1 min-w-[300px] max-w-xs"
          variants={introAnimateVariants}
          initial="initial"
          whileInView="animate"
          custom={2}
          viewport={{
            once: true,
          }}
        >
          <Card className="h-[235px] border-b-4 border-b-[--theme-blue] shadow-sm hover:-translate-y-2 duration-500">
            <CardHeader>
              <CardTitle className="text-center">
                Transport stvari/robe
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-0">
              <p className="font-light">
                Vršimo transport vaših stvari. Garantujemo sigurnost i
                efikasnost u transportu vaših stvari. Bilo da je u pitanju
                posao, selidba ili drugo, mi ćemo odgovoriti na vaše zahteve.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

const contactAnimationVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.15 * index,
    },
  }),
};

const ContactSection = () => (
  <section className="flex justify-center pt-[28rem] sm:pt-[12rem] lg:pt-[4rem] pb-24 px-8 bg-slate-50 bg-opacity-75">
    <div className="max-w-5xl flex flex-col lg:flex-row text-center lg:text-left items-center gap-4">
      <div className="flex-1 flex flex-col items-center lg:items-start">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold"
          variants={contactAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={0}
          viewport={{
            once: true,
          }}
        >
          Kontaktirajte nas već danas
        </motion.h2>
        <motion.p
          className="py-6 text-lg"
          variants={contactAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={1}
          viewport={{
            once: true,
          }}
        >
          Pored usluge šlep slube, nudimo i prevoz vaših stvari kombi
          transportnim vozilom sa prikolicom. Odlična solucija u slučaju da se
          selite, ili imate veliku količinu stvari za transport.
        </motion.p>
        <motion.button
          variants={contactAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={2}
          viewport={{
            once: true,
          }}
        >
          <motion.a
            className="flex py-3 px-5 gap-2 rounded-md items-center uppercase font-semibold text-white bg-[--theme-blue] hover:bg-[--theme-lightblue] hover:-rotate-2 hover:scale-110 duration-200"
            href="tel:0651185542"
            aria-label="Pozovite Sada"
          >
            <FiPhoneCall className="h-5 w-5" /> Pozovite Sada
          </motion.a>
        </motion.button>
      </div>
      <div className="flex-1 pt-6 p-0">
        <motion.div
          className="w-[350px] md:w-[450px] h-[12rem] md:h-[18rem] rounded-md overflow-hidden relative"
          variants={{ ...contactAnimationVariants }}
          initial="initial"
          whileInView="animate"
          custom={3}
          viewport={{
            once: true,
          }}
        >
          <Image
            className="hover:scale-105 duration-200"
            style={{ objectFit: "cover" }}
            src={GrayTowTruckImage}
            fill
            alt="Gray Tow Truck Image"
            placeholder="blur"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

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

const WhyChooseUsSection = () => (
  <section className="flex justify-center py-24 px-8 bg-[--theme-blue]">
    <div className="flex-1 max-w-5xl flex flex-col items-center text-center text-white">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
      >
        Zašto izabrati nas?
      </motion.h2>
      <motion.p
        className="py-6 text-lg"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
      >
        Posvećeni smo pružanju izvrsne korisničke usluge i osiguravanju da se
        vaša vozila i roba transportiraju sigurno i efikasno.
      </motion.p>
      <div className="w-full pt-8 flex justify-center gap-8 flex-wrap">
        <motion.div
          className="py-8 px-4 min-w-[300px] max-w-xs flex-1 flex flex-col items-center gap-4 bg-white rounded-md"
          whileInView="animate"
          variants={fadeInAnimationVariants}
          initial="initial"
          custom={0}
          viewport={{
            once: true,
          }}
        >
          <span className="rounded-full p-4 bg-[--theme-blue]">
            <FaMapLocationDot className="h-8 w-8" />
          </span>
          <h3 className="font-semibold uppercase text-xl text-[--theme-blue]">
            Dostupnost
          </h3>
          <p className="text-lg text-black">
            Trudimo se da maksimalno izađemo u susret vašim potrebama i budemo
            tu za vas onda kada vam je to najpotrebnije.
          </p>
        </motion.div>
        <motion.div
          className="py-8 px-4 min-w-[300px] max-w-xs flex-1 flex flex-col items-center gap-4 bg-white rounded-md"
          whileInView="animate"
          variants={fadeInAnimationVariants}
          initial="initial"
          custom={1}
          viewport={{
            once: true,
          }}
        >
          <span className="rounded-full p-4 bg-[--theme-blue]">
            <GiReceiveMoney className="h-8 w-8" />
          </span>

          <h3 className="font-semibold uppercase text-xl text-[--theme-blue]">
            Pristupačne Cene
          </h3>
          <p className="text-lg text-black">
            Nudimo konkurentne i transparentne cene, bez skrivenih doplata ili
            naknada.
          </p>
        </motion.div>
        <motion.div
          className="py-8 px-4 min-w-[300px] max-w-xs flex-1 flex flex-col items-center gap-4 bg-white rounded-md"
          whileInView="animate"
          variants={fadeInAnimationVariants}
          initial="initial"
          custom={2}
          viewport={{
            once: true,
          }}
        >
          <span className="rounded-full p-4 bg-[--theme-blue]">
            <AiTwotoneStar className="h-8 w-8" />
          </span>

          <h3 className="font-semibold uppercase text-xl text-[--theme-blue]">
            Profesionalnost I Iskustvo
          </h3>
          <p className="text-lg text-black">
            Dugogodišnje iskustvo i zagarantovana usluga na najvišem
            profesionalnom nivou.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export { IntroSection, FeaturesSection, ContactSection, WhyChooseUsSection };
