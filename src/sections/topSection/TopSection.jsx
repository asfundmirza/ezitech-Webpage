import React from "react";
import Navbar from "./components/Navbar";
import BackgroundImage from "../../assets/topSection/topImage.jpg";
import HeroSection from "./components/HeroSection";
const TopSection = () => {
  return (
    <div className="flex">
      <div
        style={{ backgroundImage: `url(${BackgroundImage})` }}
        className="w-full min-h-screen bg-cover bg-center opacity-90  "
      >
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
};

export default TopSection;
