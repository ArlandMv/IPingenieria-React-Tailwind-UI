import React from "react";
//import { icons } from 'react-icons';
import { CgClose } from "react-icons/cg";

//data
import { navData } from "../constants/index";

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className="top-0 bottom-0 flex items-center justify-center h-full lg:hidden bg-violet w-80">
      <div
        onClick={() => setNavMobile(false)}
        className="absolute top-2 left-2 cursor-pointer"
      >
        <CgClose className="text-3xl " />
      </div>
      {/* menu list */}
      <ul className="text-xl flex flex-col gap-y-8">
        {navData.map((item, index) => {
          return (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
