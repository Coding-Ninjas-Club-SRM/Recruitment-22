import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import cnlogo from "./assets/cnlogo.png";
import { useScrollPosition } from "./hooks/scrollPosition";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const scrollPosition = useScrollPosition();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

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
      className={classNames(
        scrollPosition > 0 ? "bg-black" : "bg-transparent",
        "flex justify-between items-center w-full h-24 p-8 text-white text-2xl  fixed font-jetbrains z-20",
      )}
    >
      <div className="w-32 xs:w-36 sm:w-44 md:w-52 pb-4 cursor-pointer">
        <Link to="landing" smooth duration={500} offset={-96}>
          <img src={cnlogo} alt="" />
        </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, doff }) => (
          <li
            key={id}
            className="px-12 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500} offset={-96}>
              {link}
            </Link>
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
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black">
          <ul className="flex flex-col justify-center items-center">
            {links.map(({ id, link, moff }) => (
              <li
                key={id}
                className="px-4 py-6 text-3xl capitalize font-medium"
              >
                <Link to={link} smooth duration={500} offset={-96}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
