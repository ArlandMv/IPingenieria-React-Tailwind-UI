import React from "react";
import { CgMenuRight } from "react-icons/cg";
// Components
//import AccountBtns from "./AccountBtns";
import Nav from "./Nav";

//import { IoCpu, IoBroadcast } from "react-icons/io";
//import { FaMicrochip, FaBroadcastTower } from "react-icons/fa";
//import { MdMemory, MdCast } from "react-icons/md";
import { PiBroadcastBold } from "react-icons/pi";
import AccountBtns from "./AccountBtns";

const Header = ({ setNavMobile }) => {
  return (
    <header className="py-[30px] md:px-14 lg:pt-[60px]">
      <div className="container flex items-center justify-between mx-auto">
        {/* logo */}
        <div className="flex items-center">
          <PiBroadcastBold className="text-white text-2xl lg:text-4xl mr-2" />
          <span className="text-white text-xl lg:text-2xl font-bold">
            IP Ingeniería
          </span>
        </div>
        {/* nav btns */}
        <div className="hidden lg:flex">
          <Nav />
          <AccountBtns />
        </div>
        {/* nav btns */}
        <div
          onClick={() => setNavMobile(true)}
          className="cursor-pointer lg:hidden"
        >
          <CgMenuRight className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
