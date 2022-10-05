import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import line from "./assets/line.png";
import Timer from "./components/Timer";
import style from "./Landing.module.css";

function Landing() {
  return (
    <div className="w-full h-screen bg-landingbg bg-cover flex flex-col justify-center items-center">
      <div className=" md:pl-[84px] py-6 md:self-start">
        <Timer className="py-4" />
        <p className="text-gray-500 text-xl xs:text-2xl flex flex-row items-center font-audiowide tracking-[0.21em] py-4">
          <MdOutlineKeyboardArrowRight />
          <MdOutlineKeyboardArrowRight className="-ml-3" />
          Clock is ticking!
        </p>
      </div>

      <div
        className={
          "text-white font-jetbrains font-bold py-6 flex flex-col items-center text-center " +
          style.glow
        }
      >
        <p className="text-3xl hidden xs:contents sm:text-5xl md:text-6xl px-2">
          Register now to become <br /> part of our family
        </p>
        <p className="text-2xl xs:hidden px-3">
          Register now to become part of our family
        </p>
      </div>

      <div className="font-jetbrains font-bold text-black text-center text-xl xs:text-2xl py-6 flex flex-col items-center">
        <a href="#" className="z-10">
          <button className="w-36 h-10 xs:w-48 xs:h-16 bg-gradient-to-r from-[#F12711] to-[#F5AF19] rounded-md xs:rounded-xl">
            Apply Now!
          </button>
        </a>
        <div className="w-36 h-10 xs:w-48 xs:h-16 border-4 border-white rounded-lg xs:rounded-xl -mt-7 xs:-mt-10 -ml-6"></div>
      </div>

      <img
        src={line}
        alt=""
        className="w-7/10 absolute bottom-0 left-0 right-0 block ml-auto mr-auto"
      />
    </div>
  );
}

export default Landing;
