"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FiPhoneCall } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { AiTwotoneStar } from "react-icons/ai";
import RedTowTruckImage from "@/public/assets/images/red-tow-truck.jpg";
import GrayTowTruckImage from "@/public/assets/images/gray-tow-truck.jpg";

const IntroSection = () => (
  <section className="flex justify-center py-52 lg:py-60 px-8 relative z-10 overflow-hidden">
    <div className="absolute h-full w-full inset-0 bg-black/60">
      <Image
        className="h-full w-full -z-[10]"
        src={RedTowTruckImage}
        layout="fill"
        objectFit="cover"
        priority={true}
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
        >
          <FiPhoneCall className="h-5 w-5" /> Pozovite Sada
        </a>
      </motion.button>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="flex justify-center py-32 lg:pt-0 bg-slate-50 bg-opacity-75 relative z-20">
    <div className="max-w-5xl absolute w-full xl:px-0 -top-[6.75rem] left-1/2 -translate-x-1/2  flex flex-col md:flex-row justify-center items-center md:gap-4 gap-0">
      <div className="flex-1 flex justify-center gap-8 flex-wrap">
        <motion.div
          className="flex-1 min-w-[300px] max-w-xs"
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.66,
            duration: 0.5,
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
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.77,
            duration: 0.5,
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
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.88,
            duration: 0.5,
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

const ContactSection = () => (
  <section className="flex justify-center pt-[28rem] sm:pt-[12rem] lg:pt-[4rem] pb-24 px-8 bg-slate-50 bg-opacity-75">
    <div className="max-w-5xl flex flex-col lg:flex-row text-center lg:text-left items-center  gap-4">
      <div className="flex-1 flex flex-col items-center lg:items-start">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Kontaktirajte nas već danas
        </h2>
        <p className="py-6 text-lg">
          Pored usluge šlep slube, nudimo i prevoz vaših stvari kombi
          transportnim vozilom sa prikolicom. Odlična solucija u slučaju da se
          selite, ili imate veliku količinu stvari za transport.
        </p>
        <button
          style={{
            opacity: 1,
            transform: "none",
          }}
        >
          <a
            className="flex py-3 px-5 gap-2 rounded-md items-center uppercase font-semibold text-white bg-[--theme-blue] hover:bg-[--theme-lightblue] hover:-rotate-2 hover:scale-110 duration-200"
            href="tel:"
          >
            <FiPhoneCall className="h-5 w-5" /> Pozovite
          </a>
        </button>
      </div>
      <div className="flex-1 pt-6 p-0">
        <Image
          className="rounded-md"
          src={GrayTowTruckImage}
          alt="Gray Tow Truck Image"
          placeholder="blur"
          aria-placeholder="Gray Tow Truck Image"
        />
      </div>
    </div>
  </section>
);

const WhyChooseUsSection = () => (
  <section className="flex justify-center py-24 px-8 bg-[--theme-blue]">
    <div className="max-w-5xl flex flex-col items-center text-center text-white">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Zašto izabrati nas?
      </h2>
      <p className="py-6 text-lg">
        Posvećeni smo pružanju izvrsne korisničke usluge i osiguravanju da se
        vaša vozila i roba transportiraju sigurno i efikasno.
      </p>
      <div className="pt-8 flex justify-center gap-8 flex-wrap">
        <div className="py-8 px-4 min-w-[300px] max-w-[300px] flex-1 flex flex-col items-center gap-4 bg-white rounded-md">
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
        </div>
        <div className="py-8 px-4 min-w-[300px] max-w-[300px] flex-1 flex flex-col items-center gap-4 bg-white rounded-md">
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
        </div>
        <div className="py-8 px-4 min-w-[300px] max-w-[300px] flex-1 flex flex-col items-center gap-4 bg-white rounded-md">
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
        </div>
      </div>
    </div>
  </section>
);

export { IntroSection, FeaturesSection, ContactSection, WhyChooseUsSection };
