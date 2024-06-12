"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { useActiveLinkContext } from "~/context/active-link-context";
import { pageLinks } from "~/lib/data";
import { cn } from "~/lib/utils";

const DesktopNav = () => {
  const { url } = useActiveLinkContext();

  return (
    <nav className="hidden w-full items-center justify-center bg-white px-4 md:flex">
      <ul className="flex max-w-5xl flex-1 items-center gap-4">
        <li>
          <ul className="flex justify-start gap-4">
            {pageLinks.map((link, index) => (
              <li key={index} className="relative py-6">
                <Link
                  className={cn(
                    "relative z-10 cursor-pointer px-4 py-6 font-medium uppercase text-black/75 duration-300",
                    {
                      "text-white": link.url === url,
                    },
                  )}
                  href={link.url}
                >
                  {link.name}
                </Link>
                {link.url === url && (
                  <motion.span
                    className="absolute left-0 top-1/2 w-full -translate-y-1/2 rounded-lg bg-[--theme-blue] py-6"
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
        <li className="flex flex-1 justify-center">
          <span className="text-xl font-medium">TEL: 065 118 55 42</span>
        </li>
        <li>
          <a
            className="flex items-center gap-2 rounded-md bg-[--theme-blue] px-5 py-3 font-semibold uppercase text-white duration-200 hover:-rotate-2 hover:scale-110 hover:bg-[--theme-lightblue]"
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
