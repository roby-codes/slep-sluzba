import { Metadata } from "next";

import { IntroSection } from "@/sections/services";

export const metadata: Metadata = {
  title: "Services - Šlep Služba - Veliko Gradište",
  openGraph: {
    title: "Services - Šlep Služba - Veliko Gradište",
  },
};

const ServicesPage = () => (
  <main>
    <IntroSection />
  </main>
);

export default ServicesPage;
