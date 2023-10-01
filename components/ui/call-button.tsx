"use client";

import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";

const CallButton = () => (
  <motion.a
    className="fixed z-[999] bottom-7 right-7 rounded-full p-4 bg-[--theme-blue] flex items-center justify-centerhover:bg-[--theme-lightblue] hover:-rotate-2 hover:scale-110 duration-500 border border-white/25"
    href="tel:0651185542"
    aria-label="Pozovite Sada"
    initial={{
      y: 0,
    }}
    animate={{
      y: -10,
    }}
    transition={{
      repeat: Infinity,
      duration: 1.5,
      repeatType: "mirror",
    }}
  >
    <FiPhoneCall className="h-7 w-7 text-white" />
  </motion.a>
);

export default CallButton;
