import React from "react";
import { Search } from "lucide-react";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <div className="flex w-full md:h-[90%] h-auto text-white relative z-20 ">
        <div className="flex w-full  justify-center">
          <div class="flex flex-col gap-6 w-full max-w-[1000px] items-center justify-center  px-2 ">
            <div className="hidden md:block w-full text-center">
              <h1 className=" text-[40px] md:text-[65px] font-bold">
                Learn the fundamentals with our expert in{" "}
                <span className="text-blue-600">Programming</span>
              </h1>
            </div>
            <h1 className="flex md:text-[30px] text-[20px] font-bold text-center mt-9 md:mt-0 ">
              Utilize Effective Learning To Reach Your Potential
            </h1>
            <div className="hidden md:flex p-1 px-3 w-[50%] justify-center items-center rounded-md bg-white">
              <input
                type="text"
                placeholder="Search Courses..."
                className=" bg-inherit text-black w-full py-2 font-sans text-sm outline-none border-solid "
              />
              <div>
                <Search className="text-gray-400 pl-2" />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <h1 className="flex text-[7px] md:text-[20px] ">
                Explore our more useful products
              </h1>
              <div>
                <Heart className="md:w-6 w-2 h-auto" />
              </div>
            </div>
            <div className="flex gap-8 items-center md:mb-0 mb-2">
              <h1 className="flex text-[12px] md:text-[45px] font-bold">
                EZIBL<span className="text-blue-600">O</span>GS
              </h1>
              <h1 className="flex text-[12px] md:text-[45px] font-bold">
                EZIP<span className="text-blue-600">O</span>S
              </h1>
              <h1 className="flex text-[12px] md:text-[45px] font-bold">
                EZIC<span className="text-blue-600">O</span>DING
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
