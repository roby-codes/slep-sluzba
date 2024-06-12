import ActiveLinkContextProvider from "~/context/active-link-context";

import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Header = () => (
  <header className="fixed left-0 top-0 z-[999] w-full">
    <ActiveLinkContextProvider>
      <MobileNav />
      <DesktopNav />
    </ActiveLinkContextProvider>
  </header>
);

export default Header;
