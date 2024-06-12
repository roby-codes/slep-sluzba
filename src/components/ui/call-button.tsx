import { FiPhoneCall } from "react-icons/fi";

const CallButton = () => (
  <a
    className="justify-centerhover:bg-[--theme-lightblue] fixed bottom-7 right-7 z-[999] flex items-center rounded-full border border-white/25 bg-[--theme-blue] p-4 duration-500 hover:-rotate-6 hover:scale-110"
    href="tel:0651185542"
    aria-label="Pozovite Sada"
  >
    <FiPhoneCall className="h-7 w-7 text-white" />
  </a>
);

export default CallButton;
