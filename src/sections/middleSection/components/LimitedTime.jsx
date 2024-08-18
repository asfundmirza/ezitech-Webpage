import React from "react";
import Javascript from "../../../assets/middleSection/limitedTime/javascript.webp";
import Reactimg from "../../../assets/middleSection/limitedTime/react-1.webp";
import Fiverr from "../../../assets/middleSection/limitedTime/fiverr.webp";
import Node from "../../../assets/middleSection/limitedTime/node.webp";
import Trip from "../../../assets/middleSection/limitedTime/secondBox/trip.webp";
import SEO from "../../../assets/middleSection/limitedTime/secondBox/SEO.webp";
import Utube from "../../../assets/middleSection/limitedTime/secondBox/UtubeAds.webp";
import LinkedIn from "../../../assets/middleSection/limitedTime/secondBox/linkedIn.webp";
import { ChevronDown } from "lucide-react";

const LimitedTime = () => {
  return (
    <div className="flex flex-col w-full items-center mt-10    ">
      <h1 className="flex justify-center font-bold text-[40px] text-center">
        Limited-Time Summer Course Bundles!
      </h1>
      <h1 className="flex justify-center font-light text-center">
        Note: All these bundles have recorded lectures
      </h1>
      <div className="flex lg:flex-row flex-col justify-between w-full max-w-[1200px] px-6 mt-9 gap-6">
        <div className="flex-1 border shadow-lg hover:shadow-2xl overflow-hidden group max-h-[600px] md:max-h-[320px] transition-all duration-300 ease-in-out md:hover:max-h-[600px]">
          <div className="flex flex-col">
            <div className="bg-blue-800 text-white p-6 flex flex-col gap-8 justify-between items-center">
              <h1 className="font-bold text-lg">
                Web Development Course with Industrial Projects
              </h1>
              <h1 className="font-extralight">4 courses</h1>
            </div>
            <div className="text-black flex w-full gap-2 border-b p-2 justify-between mt-1 lg:mt-0  items-center">
              <div className="flex gap-2 items-center">
                <img
                  src={Javascript}
                  alt="javascript"
                  className="hidden md:flex h-[40px] w-[60px]"
                />
                <p className="font-semibold">
                  From Novice to Expert, The Complete Javascript Course 2024
                </p>
              </div>
              <p className="text-gray-500">PKR7,600</p>
            </div>
            <div className="text-black flex w-full justify-between border-b mt-1 lg:mt-0 p-2 items-center">
              <div className="flex gap-2 items-center">
                <img
                  src={Reactimg}
                  alt="javascript"
                  className="hidden md:flex h-[40px] w-[60px]"
                />
                <p className="font-semibold">
                  The Complete Guide to React (incl Hooks, React, Router, Redux)
                </p>
              </div>
              <p className="text-gray-500">PKR8,000</p>
            </div>
            <div className="relative text-black flex w-full justify-between border-b p-2 mt-2 lg:mt-0 items-center opacity-100 md:opacity-40 group-hover:opacity-100">
              <div className="flex gap-2 items-center">
                <img
                  src={Fiverr}
                  alt="javascript"
                  className=" hidden md:flex h-[40px] w-[60px]"
                />
                <p className="font-semibold">
                  Sell Fiverr Gigs Like the Top 1% Freelancing in 2024
                </p>
              </div>
              <p className="text-gray-500">PKR4,500</p>
              <div className="absolute bottom-0 left-1/2 group-hover:opacity-0 hidden md:block">
                <ChevronDown className="h-[20px] w-[20px] text-gray-500" />
              </div>
            </div>
            <div className="text-black flex w-full justify-between border-b p-2 items-center">
              <div className="flex gap-2 items-center">
                <img
                  src={Node}
                  alt="javascript"
                  className="hidden md:flex h-[40px] w-[60px]"
                />
                <p className="font-semibold">
                  The complete Bootcamp: Node.js, Express.js, MongoDB
                </p>
              </div>
              <p className="text-gray-500">PKR13,000</p>
            </div>
            <div className="font-semibold flex w-full justify-end p-4">
              PKR 10,000&nbsp;
              <span className="text-gray-500 line-through">PKR 13,000</span>
            </div>
          </div>
        </div>
        <div className="flex-1 border shadow-lg hover:shadow-2xl overflow-hidden group max-h-[600px] md:max-h-[320px] transition-all duration-300 ease-in-out md:hover:max-h-[600px]">
          <div className="flex flex-col">
            <div className="bg-blue-800 text-white p-6 flex flex-col gap-8 justify-between items-center">
              <h1 className="font-bold text-lg">
                Web Development Course with Industrial Projects
              </h1>
              <h1 className="font-extralight">4 courses</h1>
            </div>
            <div className="text-black flex w-full justify-between mt-1 border-b p-2 items-center">
              <div className="flex gap-2 items-center">
                <img
                  src={Trip}
                  alt="javascript"
                  className="h-[40px] w-[60px]"
                />
                <p className="font-semibold">
                  TripAdvisor, Google My Business, and Local SEO
                </p>
              </div>
              <p className="text-gray-500">PKR5,000</p>
            </div>
            <div className="text-black flex w-full justify-between mt-1 border-b p-2 items-center">
              <div className="flex gap-2 items-center">
                <img
                  src={Utube}
                  alt="javascript"
                  className="h-[40px] w-[60px]"
                />
                <p className="font-semibold">YouTube ads and Google ads</p>
              </div>
              <p className="text-gray-500">PKR5,000</p>
            </div>
            <div className="relative text-black flex w-full justify-between border-b p-2 mt-2 lg:mt-0 items-center opacity-100 md:opacity-40 group-hover:opacity-100">
              <div className="flex gap-2 items-center">
                <img src={SEO} alt="javascript" className="h-[40px] w-[60px]" />
                <p className="font-semibold">
                  Search Engine Optimization (SEO)
                </p>
              </div>
              <p className="text-gray-500">PKR6,000</p>
              <div className="absolute bottom-0 left-1/2 group-hover:opacity-0 hidden md:block">
                <ChevronDown className="h-[20px] w-[20px] text-gray-500" />
              </div>
            </div>
            <div className="text-black flex w-full justify-between border-b p-2 items-center">
              <div className="flex gap-2 items-center">
                <img
                  src={LinkedIn}
                  alt="javascript"
                  className="h-[40px] w-[60px]"
                />
                <p className="font-semibold">LinkedIn Orientation</p>
              </div>
              <p className="text-gray-500">PKR5,000</p>
            </div>
            <div className="font-semibold flex w-full justify-end p-4">
              PKR 8,000&nbsp;
              <span className="text-gray-500 line-through">PKR 32,500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedTime;
