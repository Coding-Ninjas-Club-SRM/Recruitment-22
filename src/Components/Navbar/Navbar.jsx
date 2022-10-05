import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import cnlogo from "./assets/cnlogo.png";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "contact us",
    },
    {
      id: 2,
      link: "about us",
    },
    {
      id: 3,
      link: "domains",
    },
  ];

  return (
    <div
      id="navbar"
      className="flex justify-between items-center w-full h-24 px-4 text-white text-2xl bg-transparent fixed font-jetbrains"
    >
      <div className="w-60">
        <img src={cnlogo} alt="" />
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, doff }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="z-20 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black">
          <ul className="flex flex-col justify-center items-center">
            {links.map(({ id, link, moff }) => (
              <li
                key={id}
                className="px-4 py-6 text-3xl capitalize font-medium"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
