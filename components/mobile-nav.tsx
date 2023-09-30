"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveLinkContext } from "@/context/active-link-context";
import { pageLinks } from "@/lib/data";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { url } = useActiveLinkContext();

  return (
    <nav className="md:hidden w-full bg-white relative">
      <ul className="p-4 flex-1 flex bg-white">
        <li className="flex-1 flex items-center">
          <span className="text-xl font-medium">065 118 55 42</span>
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
            className="absolute -z-10 left-0 top-full w-full p-4 bg-[--theme-blue] bg-opacity-20 border-b border-white/50"
            initial={{
              x: 800,
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: 800,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <ul className="flex flex-col gap-2">
              {pageLinks.map((link, index) => (
                <li key={index} className="flex-1 relative p-2 z-10">
                  <Link
                    className={cn(
                      "w-full px-4 cursor-pointer transition text-white uppercase font-medium",
                      {
                        "text-black": link.url === url,
                      }
                    )}
                    href={link.url}
                  >
                    {link.name}
                  </Link>
                  {link.url === url && (
                    <motion.span
                      layoutId="activeLinkMobile"
                      className="absolute inset-0 bg-white rounded-md -z-[5]"
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
