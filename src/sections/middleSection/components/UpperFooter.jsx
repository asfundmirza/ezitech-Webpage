import React from "react";
import MobilePhone from "../../../assets/middleSection/upperFooter/mobilePicked.jpg";
import Appstore from "../../../assets/middleSection/upperFooter/appstore-copy.webp";
import GooglePlay from "../../../assets/middleSection/upperFooter/googlePlay.png";

const UpperFooter = () => {
  return (
    <div className="flex w-full text-black  ">
      <div className="flex w-full justify-center">
        <div class="flex w-full items-center  max-w-[1200px] px-2">
          <div className="flex justify-between ">
            <div className="flex w-[600px] h-[600px]">
              <img src={MobilePhone} alt="phone" className="h-full w-full" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-[70px] font-bold">
              Learn <span className="text-blue-700">anytime</span> from anywhere
            </h1>
            <p className=" font-light">
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
