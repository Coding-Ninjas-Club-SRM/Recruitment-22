import React, { useCallback } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import line from "./assets/line.png";
import Timer from "./components/Timer";
import style from "./Landing.module.css";

function Landing() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div
      name="landing"
      className="w-full h-screen flex flex-col justify-center items-center"
    >
      <div className="md:pl-[84px] py-6 md:self-start">
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

      <div id="particles-js"></div>
      <script src="particles.js"></script>

      <Particles
        className="-z-10"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 400,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default Landing;
