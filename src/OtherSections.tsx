import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Ecosystem from "./components/Ecosystem";
import HowToBuy from "./components/HowToBuy";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";

const OtherSections: React.FC = () => {
  return (
    <main className="">
      <HeroSection />
      <About />
      <Ecosystem />
      {/* <PumpPad /> */}
      {/* <FWB /> */}
      <HowToBuy />
      <Tokenomics />
      <Roadmap />
      <Faq />
    </main>
  );
};

export default OtherSections;
