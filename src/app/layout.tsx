import type { Metadata } from "next";
import Header from "~/components/header";
import { Kanit } from "next/font/google";
import Footer from "~/components/footer";
import CallButton from "~/components/ui/call-button";
import { env } from "@/env";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["200", "300", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(env.DOMAIN),
  title: "Šlep Služba - Veliko Gradište",
  description:
    "Mi smo pouzdan pružalac šlep usluga u Velikom Gradištu, koji nudimo transport i dostavu vozila i robe. Posvećeni smo pružanju odlične usluge i zadovoljavanju potreba naših klijenata.",
  openGraph: {
    title: "Šlep Služba - Veliko Gradište",
    description:
      "Mi smo pouzdan pružalac šlep usluga u Velikom Gradištu, koji nudimo transport i dostavu vozila i robe. Posvećeni smo pružanju odlične usluge i zadovoljavanju potreba naših klijenata.",
    images: ["/assets/images/red-tow-truck.jpg"],
  },
  icons: [
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
      color: "#3341c2",
    },
  ],
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#3341c2",
    "theme-color": "#3341c2",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${kanit.className} bg-slate-50 font-light`}>
        <div className="fixed right-[18rem] top-[3rem] -z-10 h-[17rem] w-[14rem] rounded-full bg-[--theme-blue] blur-[8rem] md:right-[26rem] md:top-[7rem] lg:right-[30rem] lg:h-[25rem] lg:w-[21rem] lg:blur-[10.5rem] xl:right-[36rem] xl:h-[30rem] xl:w-[25rem] xl:blur-[12.5rem]"></div>
        <div className="fixed right-[2rem] top-[15rem] -z-10 h-[17rem] w-[14rem] rounded-full bg-[#3e3bfd] blur-[8rem] md:right-[8rem] md:top-[25rem] lg:right-[10rem] lg:h-[25rem] lg:w-[21rem] lg:blur-[10.5rem] xl:right-[12rem] xl:h-[30rem] xl:w-[25rem] xl:blur-[12.5rem]"></div>
        <Header />
        {children}
        <Footer />
        <CallButton />
      </body>
    </html>
  );
}
