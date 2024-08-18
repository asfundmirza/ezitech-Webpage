import React from "react";
import HowItWorks from "./components/HowItWorks";
import PerfectInternship from "./components/PerfectInternship";
import UpperFooter from "./components/UpperFooter";
import LimitedTime from "./components/LimitedTime";

const MiddleSection = () => {
  return (
    <div>
      <HowItWorks />
      <LimitedTime />
      <PerfectInternship />
      <UpperFooter />
    </div>
  );
};

export default MiddleSection;
