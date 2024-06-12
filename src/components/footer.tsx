import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail, AiOutlineFieldTime } from "react-icons/ai";
import Copyright from "~/components/ui/copyright";

const Footer = () => (
  <footer className="flex flex-col items-center gap-6 bg-black/90 px-6 py-12">
    <div className="flex w-full max-w-5xl flex-wrap justify-center gap-4">
      <div className="flex !w-[300px] items-center gap-4 rounded-md bg-white p-4">
        <span className="flex h-full items-center rounded-md bg-[--theme-blue] p-2 text-white">
          <FiPhoneCall className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <span className="text-lg">
            <b>Pozovite Nas</b>
          </span>
          <span>
            <b>Tel</b>:{" "}
            <a href="tel:0651185542" aria-label="065 118 55 42">
              065 118 55 42
            </a>
          </span>
        </div>
      </div>

      <div className="flex !w-[300px] items-center gap-4 rounded-md bg-white p-4">
        <span className="flex h-full items-center rounded-md bg-[--theme-blue] p-2 text-white">
          <AiOutlineMail className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <span className="text-lg">
            <b>Pošaljite E-mail</b>
          </span>
          <span>
            <a href="mailto:goran5571@yahoo.de" aria-label="goran5571@yahoo.de">
              goran5571@yahoo.de
            </a>
          </span>
        </div>
      </div>
      <div className="flex !w-[300px] items-center gap-4 rounded-md bg-white p-4">
        <span className="flex h-full items-center rounded-md bg-[--theme-blue] p-2 text-white">
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
    <Copyright />
  </footer>
);

export default Footer;
