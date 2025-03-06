import React from "react";
import main from "./images/main.png"; // Ensure the correct path to your image

const LoadingScreen: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black to-[#1A1A1A] text-white h-screen font-bold flex flex-col justify-center items-center">
      {/* Loading Image */}
      <img
        src={main}
        alt="Loading Character"
        className="w-32 h-32 mb-6 animate-bounce transition-transform duration-300"
      />
      {/* Loading Text */}
      <h1 className="text-3xl font-extrabold text-center animate-pulse mb-2">
        Loading...
      </h1>
      <p className="text-lg text-[#B0B0B0] px-2 text-center md:text-start">
        Please wait while we prepare everything for you.
      </p>
    </div>
  );
};

export default LoadingScreen;
