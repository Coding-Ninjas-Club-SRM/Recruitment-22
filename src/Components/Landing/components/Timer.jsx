import React, { useEffect, useState } from "react";

function Timer() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const startTimer = () => {
    const countDownDate = new Date("Oct 10, 2022 00:00:00").getTime();
    setInterval(() => {
      const now = new Date().getTime();

      var distance = countDownDate - now;

      if (distance < 0) {
        distance = 0;
        clearInterval();
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="flex flex-row items-center text-white font-jetbrains">
      <div className="flex flex-col items-center">
        <h2 className="text-sm xs:text-base md:text-xl mb-2">Days</h2>
        <div className="text-3xl xs:text-5xl md:text-7xl flex flex-row">
          <p className="rounded-sm xs:rounded-md border-[1px] border-white mx-[2px]">
            {parseInt(days / 10)}
          </p>
          <p className="rounded-sm xs:rounded-md border-[1px] border-white mx-[2px]">
            {days % 10}
          </p>
        </div>
      </div>

      <p className="text-3xl xs:text-5xl md:text-7xl mt-auto mx-[2px]">:</p>

      <div className="flex flex-col items-center">
        <h2 className="text-sm xs:text-base md:text-xl mb-2">Hours</h2>
        <div className="text-3xl xs:text-5xl md:text-7xl flex flex-row">
          <p className="rounded-sm xs:rounded-md border-[1px] border-white mx-[2px]">
            {parseInt(hours / 10)}
          </p>
          <p className="rounded-sm xs:rounded-md border-[1px] border-white mx-[2px]">
            {hours % 10}
          </p>
        </div>
      </div>

      <p className="text-3xl xs:text-5xl md:text-7xl mt-auto mx-[2px]">:</p>

      <div className="flex flex-col items-center">
        <h2 className="text-sm xs:text-base md:text-xl mb-2">Minutes</h2>
        <div className="text-3xl xs:text-5xl md:text-7xl flex flex-row">
          <p className="rounded-sm xs:rounded-md border-[1px] border-white mx-[2px]">
            {parseInt(minutes / 10)}
          </p>
          <p className="rounded-sm xs:rounded-md border-[1px] border-white mx-[2px]">
            {minutes % 10}
          </p>
        </div>
      </div>

      <p className="text-3xl xs:text-5xl md:text-7xl mt-auto mx-[2px]">:</p>

      <div className="flex flex-col items-center">
        <h2 className="text-sm xs:text-base md:text-xl mb-2">Seconds</h2>
        <div className="text-3xl xs:text-5xl md:text-7xl flex flex-row">
          <p className="rounded-sm xs:rounded-md border-[1px] border-white mx-[2px]">
            {parseInt(seconds / 10)}
          </p>
          <p className="rounded-sm xs:rounded-md border-[1px] border-white mx-[2px]">
            {seconds % 10}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timer;
