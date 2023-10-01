"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { useActiveLinkContext } from "@/context/active-link-context";
import { pageLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const DesktopNav = () => {
  const { url } = useActiveLinkContext();

  return (
    <nav className="px-4 hidden md:flex w-full justify-center items-center bg-white">
      <ul className="max-w-5xl flex-1 flex items-center gap-4">
        <li className="flex-1 ">
          <ul className="flex justify-start gap-4">
            {pageLinks.map((link, index) => (
              <li key={index} className="relative py-6">
                <Link
                  className={cn(
                    "py-6 px-4 cursor-pointer text-black/75 uppercase font-medium relative z-10 duration-500",
                    {
                      "text-white": link.url === url,
                    }
                  )}
                  href={link.url}
                >
                  {link.name}
                </Link>
                {link.url === url && (
                  <motion.span
                    className="absolute left-0 top-1/2 -translate-y-1/2 py-6 w-full rounded-lg bg-[--theme-blue]"
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
        </li>
        <li>
          <a
            className="flex py-3 px-5 gap-2 rounded-md items-center uppercase font-semibold text-white bg-[--theme-blue] hover:bg-[--theme-lightblue] hover:-rotate-2 hover:scale-110 duration-200"
            href="tel:0651185542"
            aria-label="Pozovite Sada"
          >
            <FiPhoneCall className="h-5 w-5" /> Pozovite Sada
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
