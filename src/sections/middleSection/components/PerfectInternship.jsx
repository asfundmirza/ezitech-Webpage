import React from "react";
import HtmlCss from "../../../assets/middleSection/perfectIntership/htmlCSS.png";
import GraphicDesign from "../../../assets/middleSection/perfectIntership/graphicDesign.png";
import DigitalMarketing from "../../../assets/middleSection/perfectIntership/digitalMarketing.png";
import FlutterDevelopment from "../../../assets/middleSection/perfectIntership/flutterDevelopment.png";
import MachineLearning from "../../../assets/middleSection/perfectIntership/machineLearning.png";
import MernDevelopment from "../../../assets/middleSection/perfectIntership/mernDevelopment.png";
import { CircleUserRound } from "lucide-react";
import { Navigation } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";

const PerfectInternship = () => {
  const boxContent = [
    {
      src: HtmlCss,
      alt: "HtmlCss",
      name: "HTML/CSS Javascript",
      employment: "Hybrid",
      Location: "Rawalpindi",
      JobType: "Full Time",
    },
    {
      src: GraphicDesign,
      alt: "GraphicDesign",
      name: "Graphic Design",
      employment: "Hybrid",
      Location: "Rawalpindi",
      JobType: "Full Time",
    },
    {
      src: DigitalMarketing,
      alt: "DigitalMarketing",
      name: "Digital Marketing",
      employment: "Hybrid",
      Location: "Rawalpindi",
      JobType: "Full Time",
    },
    {
      src: FlutterDevelopment,
      alt: "FlutterDevelopment",
      name: "Flutter Development",
      employment: "Hybrid",
      Location: "Rawalpindi",
      JobType: "Full Time",
    },
    {
      src: MachineLearning,
      alt: "MachineLearning",
      name: "Machine Learning",
      employment: "Hybrid",
      Location: "Rawalpindi",
      JobType: "Full Time",
    },
    {
      src: MernDevelopment,
      alt: "MernDevelopment",
      name: "MERN Development",
      employment: "Hybrid",
      Location: "Rawalpindi",
      JobType: "Full Time",
    },
  ];
  return (
    <div className="flex w-full text-black  ">
      <div className="flex w-full justify-center">
        <div class="flex flex-col w-full max-w-[1200px] px-2 gap-14">
          <div className="flex justify-center">
            <h1 className="text-[40px] font-bold pt-[100px]  ">
              Perfect Internship's For You?
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
            {boxContent.map((box, index) => (
              <div
                key={index}
                className="bg-white text-white flex flex-col shadow-lg rounded-lg pb-6 transition-transform transform hover:scale-105 duration-300 "
              >
                <div className="bg-blue-800 rounded-t-lg shadow-lg text-white w-full p-6 flex justify-between">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[32px] font-bold">{box.name}</h1>
                    <div className="w-[50%] border  bg-white "></div>
                    <p>Ezitech Institute</p>
                  </div>
                  <img
                    src={box.src}
                    alt={box.alt}
                    className="rounded-md h-[100px] w-[100px] object-cover"
                  />
                </div>
                <div className="flex flex-col p-6 gap-4 text-black">
                  <div className="flex gap-2 ">
                    <CircleUserRound className="h-[20px] w-[20px]" />
                    <h1>
                      Employement -{" "}
                      <span className="bg-blue-100 p-1 rounded-md">
                        {box.employment}
                      </span>
                    </h1>
                  </div>
                  <div className="flex gap-2 ">
                    <Navigation className="h-[20px] w-[20px]" />
                    <h1>
                      Location -{" "}
                      <span className="bg-blue-100 p-1 rounded-md">
                        {box.Location}
                      </span>
                    </h1>
                  </div>
                  <div className="flex gap-2 ">
                    <BriefcaseBusiness className="h-[20px] w-[20px]" />
                    <h1>
                      Job Type -{" "}
                      <span className="bg-blue-100 p-1 rounded-md">
                        {box.JobType}
                      </span>
                      <span className="bg-blue-100 p-1 ml-1 rounded-md">
                        Part-Time
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="flex w-full justify-center">
                  <button className="bg-blue-800 rounded-lg p-2 px-6 text-center">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectInternship;
