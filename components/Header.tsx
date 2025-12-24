import Image from "next/image";
import { pi, hamburgermenu } from "@/Assets"

const Header = () => {
  return (
    <header
      className="
        fixed top-0 z-50 w-full
        bg-white/10 backdrop-blur-md
        border-b border-white/20
      "
    >
      <div
        className="
          flex items-center justify-between
          px-4 py-3
          sm:px-6
          md:px-10
          lg:px-16
          xl:px-24
          max-w-[1440px] mx-auto
        "
      >
        {/* Logo */}
        <Image
          src={pi}
          alt="pi image"
          className="w-6 h-7 sm:w-7 sm:h-8"
        />

        {/* Hamburger Menu (mobile & tablet) */}

        <Image
          src={hamburgermenu}
          alt="hamburger-menu"
          className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer flex lg:hidden"
        />

        <div className="w-full hidden lg:flex justify-between">
          <div>
          </div>
          <div className="flex gap-12 items-center">
            <span className="font-semibold">Features</span>
            <span className="font-semibold">Specs</span>
            <span className="font-semibold">FAQs</span>
            <span className="font-semibold">Policy</span>
            <span className="text-white bg-black rounded-md px-6 py-2 ">Order Now</span>
          </div>

        </div>
      </div>
    </header>
  );
};


export default Header