import ActiveLinkContextProvider from "@/context/active-link-context";

import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Header = () => (
  <header className="fixed z-[999] top-0 left-0 w-full">
    <ActiveLinkContextProvider>
      <MobileNav />
      <DesktopNav />
    </ActiveLinkContextProvider>
  </header>
);

export default Header;
