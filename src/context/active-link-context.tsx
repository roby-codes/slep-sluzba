"use client";

import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";

type ActiveLinkContextProviderProps = {
  children: React.ReactNode;
};

type ActiveLinkType = {
  url: string;
};

const ActiveLinkContext = createContext<ActiveLinkType | null>(null);

export default function ActiveLinkContextProvider({
  children,
}: ActiveLinkContextProviderProps) {
  const pathName: string = usePathname();

  return (
    <ActiveLinkContext.Provider value={{ url: pathName }}>
      {children}
    </ActiveLinkContext.Provider>
  );
}

export function useActiveLinkContext() {
  const context = useContext(ActiveLinkContext);

  if (context === null) {
    throw new Error(
      "useActiveLinkContext must be used within an ActiveLinkContextProvider"
    );
  }

  return context;
}
