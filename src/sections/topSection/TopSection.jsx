import React from "react";
import Navbar from "./components/Navbar";
import BackgroundImage from "../../assets/topSection/topImage.jpg";
import HeroSection from "./components/HeroSection";
const TopSection = () => {
  return (
    <div className="flex">
      <div
        style={{ backgroundImage: `url(${BackgroundImage})` }}
        className="relative w-full h-[90vh] bg-cover bg-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        {/* Content */}
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default TopSection;
