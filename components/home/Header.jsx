"use client";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-black py-4 sticky top-0 z-[1000]">
      <div className="flex items-center justify-between w-[90%] mx-auto">
        {/* Logo */}
        <AnchorLink href="#home" className="text-[39px] font-[700] text-[#2DC653]">Servio</AnchorLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-16 ">
          <AnchorLink href="#home" className="cursor-pointer text-[#F8F8F8] text-[20px] font-[500] ">
            Home
          </AnchorLink>
          <AnchorLink href="#service" className="cursor-pointer text-[#F8F8F8] text-[20px] font-[500] hover:text-[#2DC653]">
            Services
          </AnchorLink>
          <AnchorLink href="#how" className="cursor-pointer text-[#F8F8F8] text-[20px] font-[500] hover:text-[#2DC653]">
            How It Works
          </AnchorLink>
          <AnchorLink href="#contact"  className="cursor-pointer text-[#F8F8F8] text-[20px] font-[500] hover:text-[#2DC653]">
            Contact Us
          </AnchorLink>
          <AnchorLink href="#signup" className="text-[#F8F8F8] bg-[#2DC653] py-2 px-6 rounded-full text-[20px] font-[500]">
            SignUp
          </AnchorLink>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer text-[#F8F8F8] text-[35px] z-[1000]" onClick={() => setMenu(!menu)}>
          {menu ? <IoMdClose /> : <IoMdMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black transition-transform duration-300 ${
          menu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <AnchorLink href="#home" className="cursor-pointer text-[#F8F8F8] text-[24px] font-[500] hover:text-[#2DC653] list-none" onClick={() => setMenu(false)}>
            Home
          </AnchorLink>
          <AnchorLink href="#service" className="cursor-pointer text-[#F8F8F8] text-[24px] font-[500] hover:text-[#2DC653] list-none" onClick={() => setMenu(false)}>
            Services
          </AnchorLink>
          <AnchorLink href="#how" className="cursor-pointer text-[#F8F8F8] text-[24px] font-[500] hover:text-[#2DC653]   list-none" onClick={() => setMenu(false)}>
            How It Works
          </AnchorLink>
          <AnchorLink href="#contact" className="cursor-pointer text-[#F8F8F8] text-[24px] font-[500] hover:text-[#2DC653]   list-none" onClick={() => setMenu(false)}>
            Contact Us
          </AnchorLink>
          <AnchorLink href="#signup" className="text-[#F8F8F8] bg-[#2DC653] py-2 px-6 rounded-full text-[24px] font-[500]" onClick={() => setMenu(false)}>
            SignUp
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
