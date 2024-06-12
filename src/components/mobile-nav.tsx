"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { useActiveLinkContext } from "~/context/active-link-context";
import { pageLinks } from "~/lib/data";
import { cn } from "~/lib/utils";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState<true | false>(false);
  const { url } = useActiveLinkContext();

  return (
    <nav className="relative w-full bg-white shadow-sm md:hidden">
      <ul className="flex flex-1 items-center bg-white p-4">
        <li>
          <Link
            className="flex items-center gap-2 rounded-md bg-[--theme-blue] p-2 font-semibold uppercase duration-200 hover:bg-[--theme-lightblue] focus:outline-none"
            href="/"
            aria-label="Home Page"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <AiOutlineHome className="h-6 w-6 text-white" />
          </Link>
        </li>
        <li className="flex flex-1 justify-center">
          <span className="text-xl font-medium">TEL: 065 118 55 42</span>
        </li>
        <li>
          <button
            className="flex items-center gap-2 rounded-md bg-[--theme-blue] p-2 font-semibold uppercase duration-200 hover:bg-[--theme-lightblue] focus:outline-none"
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
            className="absolute left-0 top-full -z-10 w-full bg-slate-50 p-4 shadow-sm"
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: -200,
            }}
            transition={{
              duration: 0.33,
            }}
          >
            <ul className="flex flex-col gap-2">
              {pageLinks.map((link, index) => (
                <li key={index} className="relative z-10 flex flex-1">
                  <Link
                    className={cn(
                      "w-full cursor-pointer rounded-md bg-white/75 px-4 py-2 font-medium uppercase text-black transition",
                      {
                        "bg-transparent text-white": link.url === url,
                      },
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
                      className="absolute inset-0 -z-[5] rounded-md bg-[--theme-blue]"
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
