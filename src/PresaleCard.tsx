// src/PresaleCard.tsx

import React, { useState, useEffect } from "react";
import { bgCard } from "./images";

const PresaleCard: React.FC = () => {
  // Target date for countdown (Jan 1, 2025)
  const targetDate = new Date("2025-03-01T00:00:00Z").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown calculation
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      style={{
        backgroundImage: `url(${bgCard})`,
        overflow: "visible"
      }}
      className="w-full  relative   text-white h-[750px] bg-cover  bg-no-repeat  p-6 z-40  mt-10  "
    >
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 tracking-widest font-permanent">
        PRESALE ENDING IN
      </h3>

      {/* Countdown Timer */}
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col justify-center items-center rounded-[12px] bg-white">
          <p className="font-shadows text-[#9E9E9E] text-[16px]">Days</p>
          <span className="font-permanent text-[36px] text-[#103A5D] font-bold">
            {timeLeft.days}
          </span>
        </div>

        <div className="flex flex-col justify-center items-center rounded-[12px] bg-white">
          <p className="font-shadows text-[#9E9E9E] text-[16px]">Hours</p>
          <span className="font-permanent text-[36px] text-[#103A5D] font-bold">
            {timeLeft.hours}
          </span>
        </div>

        <div className="flex flex-col justify-center items-center rounded-[12px] bg-white">
          <p className="font-shadows text-[#9E9E9E] text-[16px]">Minutes</p>
          <span className="font-permanent text-[36px] text-[#103A5D] font-bold">
            {timeLeft.minutes}
          </span>
        </div>

        <div className="flex flex-col justify-center items-center rounded-[12px] bg-white">
          <p className="font-shadows text-[#9E9E9E] text-[16px]">Seconds</p>
          <span className="font-permanent text-[36px] text-[#103A5D] font-bold">
            {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
          </span>
        </div>
      </div>

      <div className="text-center text-white font-shadows mt-3">
        <p>Last chance to buy before major exchange listings</p>
      </div>

      {/* Embedded Section */}
      <div className=" flex justify-center ml-5 h-[470px]    ">
        <div className="bg-white rounded-[12px] p-2 w-full h-full">
          <iframe
            allow="clipboard-write"
            style={{
              outline: "10px",
              border: "10px",
              width: "100%",
              height: "450px"
            }}
            src="https://pay.radom.com/presale/98385167-718b-43d0-994a-902f86e1818d"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PresaleCard;
