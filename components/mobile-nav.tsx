"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useActiveLinkContext } from "@/context/active-link-context";
import { pageLinks } from "@/lib/data";
import { FiPhoneCall } from "react-icons/fi";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const { url } = useActiveLinkContext();

  return (
    <nav className="p-4 md:hidden w-full justify-center items-center bg-white">
      <ul className="max-w-5xl flex-1 flex items-center gap-4">
        <ul className="flex-1 flex justify-start gap-4"></ul>
        <li>
          <a
            className="flex py-3 px-3 gap-2 rounded-md items-center uppercase font-semibold text-white bg-[--theme-blue] hover:bg-[--theme-lightblue] hover:-rotate-2 hover:scale-110 duration-200"
            href="tel:0651185542"
          >
            <FiPhoneCall className="h-5 w-5" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
