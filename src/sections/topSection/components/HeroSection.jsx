import React from "react";
import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import Eziblog from "../../../assets/topSection/heroSection/EZIBLOGS-DG.png";
import Ezipos from "../../../assets/topSection/heroSection/white-ezipos.png";
import Ezicoding from "../../../assets/topSection/heroSection/ezicoding.png";

const HeroSection = () => {
  return (
    <>
      <div className="flex w-full h-[90%] text-white relative z-20 ">
        <div className="flex w-full  justify-center">
          <div class="flex flex-col gap-6 w-full max-w-[1000px] items-center justify-center  px-2 ">
            <div className="w-full text-center">
              <h1 className="text-[70px] font-bold">
                Learn the fundamentals with our expert in{" "}
                <span className="text-blue-400">Programming</span>
              </h1>
            </div>
            <h1 className="flex text-[30px] text-center ">
              Utilize effective learning to reach your potential
            </h1>
            <div className="flex p-1 px-3 w-[50%] justify-center items-center rounded-md bg-white">
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
              <h1 className="flex text-[20px] ">
                Explore our more useful products
              </h1>
              <div>
                <Heart />
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <h1 className="flex text-[50px] font-bold">
                EZIBL<span className="text-blue-400">O</span>GS
              </h1>
              <h1 className="flex text-[50px] font-bold">
                EZIP<span className="text-blue-400">O</span>S
              </h1>
              <h1 className="flex text-[50px] font-bold">
                EZIC<span className="text-blue-400">O</span>DING
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
