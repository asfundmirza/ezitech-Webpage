import React from "react";
import Javascript from "../../../assets/middleSection/limitedTime/javascript.webp";
import Reactimg from "../../../assets/middleSection/limitedTime/react-1.webp";
import Fiverr from "../../../assets/middleSection/limitedTime/fiverr.webp";
import Node from "../../../assets/middleSection/limitedTime/node.webp";
import Trip from "../../../assets/middleSection/limitedTime/secondBox/trip.webp";
import SEO from "../../../assets/middleSection/limitedTime/secondBox/SEO.webp";
import Utube from "../../../assets/middleSection/limitedTime/secondBox/UtubeAds.webp";

const LimitedTime = () => {
  return (
    <div className="flex flex-col w-full items-center     ">
      <h1 className="flex justify-center font-bold text-[40px]">
        Limited-Time Summer Course Bundles!
      </h1>
      <h1 className="flex justify-center font-light">
        Note: All these bundles have recorded lectures
      </h1>
      <div className="flex justify-between w-full max-w-[1200px] px-6 mt-9 gap-6  ">
        <div className="flex-1 flex flex-col  border shadow-lg ">
          <div className=" bg-blue-800 text-white p-6 flex flex-col gap-8 justify-between items-center ">
            <h1 className=" font-bold text-lg">
              Web Development Course with Industrial Projects
            </h1>
            <h1 className=" font-extralight">4 courses</h1>
          </div>
          <div className="text-black flex w-full gap-2 border-b p-2 items-center">
            <div className="flex gap-2 items-center">
              <img
                src={Javascript}
                alt="javascript"
                className="h-[40px] w-[60px]"
              />
              <p className=" font-bold">
                From Novice to expert, The Complete Javascript Course 2024
              </p>
            </div>
            <p className="text-gray-500">PKR7,600</p>
          </div>
          <div className="text-black flex w-full justify-between border-b p-2 items-center">
            <div className="flex gap-2 items-center">
              <img
                src={Reactimg}
                alt="javascript"
                className="h-[40px] w-[60px]"
              />

              <p className=" font-bold">
                The Complete Guide to React(incl Hooks,React,Router,Redux)
              </p>
            </div>
            <p className="text-gray-500">PKR8,000</p>
          </div>
          <div className="text-black flex w-full justify-between border-b p-2 items-center">
            <div className="flex gap-2 items-center">
              <img
                src={Fiverr}
                alt="javascript"
                className="h-[40px] w-[60px]"
              />

              <p className=" font-bold">
                Sell Fiverr Gigs Like the Top 1% Freelancing in 2024
              </p>
            </div>
            <p className="text-gray-500">PKR4,500</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col  border shadow-lg ">
          <div className=" bg-blue-800 text-white p-6 flex flex-col gap-8 justify-between items-center ">
            <h1 className=" font-bold text-lg">
              Web Development Course with Industrial Projects
            </h1>
            <h1 className=" font-extralight">4 courses</h1>
          </div>
          <div className="text-black flex w-full gap-2 border-b p-2 items-center">
            <div className="flex gap-2 items-center">
              <img src={Trip} alt="javascript" className="h-[40px] w-[60px]" />
              <p className=" font-bold">
                TripAdvisor, Google My Business, and Local SEO
              </p>
            </div>
            <p className="text-gray-500">PKR5,000</p>
          </div>
          <div className="text-black flex w-full justify-between border-b p-2 items-center">
            <div className="flex gap-2 items-center">
              <img src={Utube} alt="javascript" className="h-[40px] w-[60px]" />

              <p className=" font-bold">Youtube ads and Google ads</p>
            </div>
            <p className="text-gray-500">PKR5,000</p>
          </div>
          <div className="text-black flex w-full justify-between border-b p-2 items-center">
            <div className="flex gap-2 items-center">
              <img src={SEO} alt="javascript" className="h-[40px] w-[60px]" />

              <p className=" font-bold">Search Engine Optimization (SEO)</p>
            </div>
            <p className="text-gray-500">PKR6,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedTime;
