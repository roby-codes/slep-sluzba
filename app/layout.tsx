import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Šlep Služba - Veliko Gradište",
  description:
    "Šlep služba Veliko Gradište je posvećena pružanju najkvalitetnijih šlep usluga našim korisnicima. Veliko iskustvo u ovoj oblasti osigurava da je vaše vozilo u sigurnim rukama. Ukažite nam vaše poverenje, a mi ćemo vam zagarantovati pouzdanu uslugu. Kontaktirajte nas već danas i spoznajte mir koji vam donosi saznanje da ste u dobrim rukama.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
