import { Metadata } from "next";

import { IntroSection } from "@/sections/services";

export const metadata: Metadata = {
  title: "Services - Šlep Služba - Veliko Gradište",
  openGraph: {
    title: "Services - Šlep Služba - Veliko Gradište",
    description:
      "Mi smo pouzdan pružalac šlep usluga u Velikom Gradištu, koji nudimo transport i dostavu vozila i robe. Posvećeni smo pružanju odlične usluge i zadovoljavanju potreba naših klijenata.",
    images: ["/assets/images/red-tow-truck.jpg"],
  },
};

const ServicesPage = () => (
  <main>
    <IntroSection />
  </main>
);

export default ServicesPage;
