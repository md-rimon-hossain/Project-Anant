import { useState } from "react";
import { Menu } from "lucide-react";
import VerticalCarousel from "./components/VerticalCarousel";
import { bit, bitVsEth, carousel1, cross, eth, logo, raise, sand, sol, token, tokenomics } from "./assets";
import Roadmap from "./components/Roadmap";
import TokenomicsSection from "./components/TokenomicsSection";
import { ContactSection } from "./components/ContactSection";
import Footer from "./components/Footer";
import { ConnectButton } from "./components/ConnectButton";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-white">
      {/* Header */}
      <header className="flex justify-between items-center py-5 px-4 md:px-4">
        <div className="flex items-center">
          <img src={logo} alt="Project Logo" className="w-8 h-8 mr-2" />
          <div className="font-bold text-black text-sm leading-tight">
            <div>Project</div>
            <div>Anant</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-black uppercase font-bold">
          <a href="#about" className="hover:text-gray-400 transition-colors">
            About
          </a>
          <a href="#tokenomics" className="hover:text-gray-400 transition-colors">
            Tokenomics
          </a>
          <a href="#roadmap" className="hover:text-gray-400 transition-colors">
            Roadmap
          </a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Wallet Connect Button for Desktop */}
        <div className="hidden lg:block">
          <ConnectButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden focus:outline-none"
        >
          <Menu className="h-6 w-6 text-black" />
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 z-50 p-10 transform-gpu transition-all duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`flex justify-end transition-opacity duration-300 ${
            isMenuOpen ? "delay-300" : "delay-0"
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-white hover:text-gray-400 transition-colors"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#about"
            className={`text-white hover:text-gray-400 transition-all duration-300 ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } delay-100`}
          >
            About
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#tokenomics"
            className={`text-white hover:text-gray-400 transition-all duration-300 ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } delay-200`}
          >
            Tokenomics
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#roadmap"
            className={`text-white hover:text-gray-400 transition-all duration-300 ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } delay-300`}
          >
            Roadmap
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#contact"
            className={`text-white hover:text-gray-400 transition-all duration-300 ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } delay-400`}
          >
            Contact
          </a>
          {/* Optionally, include the wallet connect button in the mobile menu */}
          <div className="mt-4">
            <ConnectButton />
          </div>
        </nav>
      </div>

      {/* Hero Carousel */}
      <div id="about" className="h-[90vh] bg-white text-black relative px-3">
        <div className="flex flex-row gap-4 ">
          <VerticalCarousel
            images={[
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              carousel1,
              raise,
              eth
            ]}
            className="!w-[50%] md:!w-[30%]"
            autoplaySpeed={6000}
            height="90vh"
            direction="bottom"
          />
          <VerticalCarousel
            images={[
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              sand,
              bitVsEth
            ]}
            className="!w-[50%] md:!w-[30%]"
            autoplaySpeed={6000}
            height="90vh"
            direction="top"
          />
          <VerticalCarousel
            images={[
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              bit,
              token
            ]}
            className="hidden md:block"
            autoplaySpeed={6000}
            height="90vh"
            direction="bottom"
          />
          <VerticalCarousel
            images={[
              sol,
              tokenomics,
              cross
            ]}
            className="hidden md:block"
            autoplaySpeed={6000}
            height="90vh"
            direction="top"
          />
        </div>
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white py-24 md:py-32 px-4 text-center text-black">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            Welcome to Project Anant Coin
            <br />
            Empowering the Future of Blockchain Innovation
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Driving the Evolution of Decentralized Finance and Digital Assets
            <br />
            We are a community-driven initiative dedicated to fostering secure transactions
            <br />
            and expanding a transparent global ecosystem
          </p>
        </div>
      </div>

      {/* Main Content */}
      <TokenomicsSection />
      <Roadmap />
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
