import { FiPhoneCall } from "react-icons/fi";

const CallButton = () => (
  <a
    className="fixed z-[999] bottom-7 right-7 rounded-full p-4 bg-[--theme-blue] flex items-center justify-centerhover:bg-[--theme-lightblue] hover:-rotate-6 hover:scale-110 duration-500 border border-white/25"
    href="tel:0651185542"
    aria-label="Pozovite Sada"
  >
    <FiPhoneCall className="h-7 w-7 text-white" />
  </a>
);

export default CallButton;
