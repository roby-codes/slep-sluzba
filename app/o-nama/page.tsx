import { Metadata } from "next";

import { IntroSection } from "@/sections/o-nama";

export const metadata: Metadata = {
  title: "O Nama - Šlep Služba - Veliko Gradište",
  openGraph: {
    title: "O Nama - Šlep Služba - Veliko Gradište",
  },
};

const ONamaPage = () => (
  <main>
    <IntroSection />
  </main>
);

export default ONamaPage;
