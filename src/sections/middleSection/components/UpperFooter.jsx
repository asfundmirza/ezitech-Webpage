import React from "react";
import MobilePhone from "../../../assets/middleSection/upperFooter/mobilePicked.jpg";
import Appstore from "../../../assets/middleSection/upperFooter/appstore-copy.webp";
import GooglePlay from "../../../assets/middleSection/upperFooter/googlePlay.png";

const UpperFooter = () => {
  return (
    <div className="flex w-full text-black mt-10  ">
      <div className="flex w-full justify-center">
        <div class="flex w-full items-center  max-w-[1200px] px-2">
          <div className="hidden flex-1 md:flex  max-w-[600px]">
            <img src={MobilePhone} alt="phone" className="h-auto w-full" />
          </div>
          <div className="flex-1 flex flex-col gap-6 text-center items-center">
            <h1 className="text-[40px] md:text-[70px] font-bold">
              Learn <span className="text-blue-700">anytime</span> from anywhere
            </h1>
            <p className="hidden md:flex font-light">
              Increase the mobility level with Eziline Technologies LMS App.
              Take your courses in your pocket and access them whenever you want
              withour any limits. Make your learning more engaging and
              productive using modern LMS app.
            </p>
            <div className="flex gap-4">
              <img
                src={Appstore}
                alt="app store"
                className="h-[50px] w-[150px]"
              />
              <img
                src={GooglePlay}
                alt="google play"
                className="h-[50px] w-[150px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperFooter;
