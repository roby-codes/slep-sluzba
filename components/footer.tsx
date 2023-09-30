import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail, AiOutlineFieldTime } from "react-icons/ai";

const Footer = () => (
  <footer className="py-12 px-6 bg-black/90 flex flex-col items-center gap-12">
    <div className="w-full max-w-5xl flex justify-center flex-wrap gap-4">
      <div className="!w-[300px] rounded-md p-4 flex items-center gap-4 bg-white">
        <span className="h-full flex items-center rounded-md p-2 bg-[--theme-blue] text-white">
          <FiPhoneCall className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <span className="text-lg">
            <b>Pozovite Nas</b>
          </span>
          <span>
            <b>Tel</b>: 065 118 55 42
          </span>
        </div>
      </div>
      <div className="!w-[300px] rounded-md p-4 flex items-center gap-4 bg-white">
        <span className="h-full flex items-center rounded-md p-2 bg-[--theme-blue] text-white">
          <AiOutlineMail className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <span className="text-lg">
            <b>Pošaljite E-mail</b>
          </span>
          <span>goran5571@yahoo.de</span>
        </div>
      </div>
      <div className="!w-[300px] rounded-md p-4 flex items-center gap-4 bg-white">
        <span className="h-full flex items-center rounded-md p-2 bg-[--theme-blue] text-white">
          <AiOutlineFieldTime className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <span className="text-lg">
            <b>Radno Vreme</b>
          </span>
          <span>
            <b>PON-PET</b>: 09:00 - 18:00
          </span>
        </div>
      </div>
    </div>
    <small className="max-w-5xl text-sm text-white">
      Copyright &copy; {new Date().getFullYear()} <span className=""></span>{" "}
      Šlep Služba - Veliko Gradište
    </small>
  </footer>
);

export default Footer;
