"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { useActiveLinkContext } from "@/context/active-link-context";
import { pageLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState<true | false>(false);
  const { url } = useActiveLinkContext();

  return (
    <nav className="md:hidden w-full bg-white relative">
      <ul className="p-4 flex-1 flex bg-white">
        <li>
          <Link
            className="flex p-2 gap-2 rounded-md items-center uppercase font-semibold bg-[--theme-blue] hover:bg-[--theme-lightblue] duration-200 focus:outline-none"
            href="/"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <AiOutlineHome className="h-6 w-6 text-white" />
          </Link>
        </li>
        <li className="flex-1 flex items-center justify-center">
          <span className="text-xl font-medium">TEL: 065 118 55 42</span>
        </li>
        <li>
          <button
            className="flex p-2 gap-2 rounded-md items-center uppercase font-semibold bg-[--theme-blue] hover:bg-[--theme-lightblue] duration-200 focus:outline-none"
            aria-label="Pozovite Sada"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? (
              <AiOutlineClose className="h-6 w-6 text-white" />
            ) : (
              <FiMenu className="h-6 w-6 text-white" />
            )}
          </button>
        </li>
      </ul>
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="absolute -z-10 left-0 top-full w-full p-4 bg-slate-50 shadow-sm"
            initial={{
              y: -350,
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: -350,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <ul className="flex flex-col gap-2">
              {pageLinks.map((link, index) => (
                <li key={index} className="flex-1 relative z-10 flex">
                  <Link
                    className={cn(
                      "rounded-md w-full py-2 px-4 cursor-pointer transition text-black bg-white/75 uppercase font-medium",
                      {
                        "text-white bg-transparent": link.url === url,
                      }
                    )}
                    href={link.url}
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                  {link.url === url && (
                    <motion.span
                      className="absolute inset-0 bg-[--theme-blue] rounded-md -z-[5]"
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                    ></motion.span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
