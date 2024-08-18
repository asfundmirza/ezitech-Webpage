import React from "react";
import TopImage from "../../../assets/middleSection/topImage1.jpg";
import TopImage2 from "../../../assets/middleSection/topImage2.jpg";
import MLAI from "../../../assets/middleSection/howItWorks/MLAI.webp";
import Blockchain from "../../../assets/middleSection/howItWorks/blockchain.webp";
import Amazon from "../../../assets/middleSection/howItWorks/amazon.webp";
import Cybersecurity from "../../../assets/middleSection/howItWorks/cyber-security.webp";
import Development from "../../../assets/middleSection/howItWorks/development.webp";
import Designing from "../../../assets/middleSection/howItWorks/designing.webp";
import Gaming from "../../../assets/middleSection/howItWorks/gaming.webp";
import Architechture from "../../../assets/middleSection/howItWorks/architecture.webp";
import IOSAND from "../../../assets/middleSection/howItWorks/IOS-AND.webp";
import Marketing from "../../../assets/middleSection/howItWorks/marketing.webp";
import ThreeD from "../../../assets/middleSection/howItWorks/3D.png";
import Animation from "../../../assets/middleSection/howItWorks/animation.png";

const HowItWorks = () => {
  const Images = [
    { src: MLAI, alt: "ML & AI" },
    { src: Blockchain, alt: "Blockchain" },
    { src: Amazon, alt: "AWS" },
    { src: Cybersecurity, alt: "Cybersecurity" },
    { src: Development, alt: "Development" },
    { src: Designing, alt: "Designing" },
    { src: Gaming, alt: "Gaming" },
    { src: Architechture, alt: "Architechture" },
    { src: IOSAND, alt: "iOS & Android" },
    { src: Marketing, alt: "Marketing" },
    { src: ThreeD, alt: "3D" },
    { src: Animation, alt: "Animation" },
  ];
  return (
    <div className="flex w-full text-black  ">
      <div className="flex w-full justify-center">
        <div class="flex flex-col w-full max-w-[1200px] px-2 gap-14">
          <div className="flex justify-center">
            <h1 className="text-[40px] font-bold pt-4  ">How it works?</h1>
          </div>
          <div className="flex justify-center gap-12">
            <img
              src={TopImage}
              alt="how it works"
              className="w-[400px] h-[300px]"
            />
            <img
              src={TopImage2}
              alt="how it works"
              className="w-[400px] h-[300px]"
            />{" "}
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4 lg:grid-cols-6">
            {Images.map((image, index) => (
              <div
                key={index}
                className="bg-white flex flex-col shadow-lg rounded-lg p-4 transition-transform transform hover:-translate-y-2 duration-300 items-center justify-center"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-md h-[100] w-[100] object-cover"
                />
                <p className="text-center mt-2 font-bold">{image.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
