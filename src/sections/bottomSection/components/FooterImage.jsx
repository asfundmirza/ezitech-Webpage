import React from "react";
import FooterImage from "../../../assets/bottomSection/footerBigImage.webp";
import PopularCourse1 from "../../../assets/bottomSection/popularCourse1.webp";
import PopularCourse2 from "../../../assets/bottomSection/popularCourse2.webp";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

const Footerimage = () => {
  return (
    <div className="flex flex-col gap-12 p-8 mt-6 text-white bg-blue-800 w-full justify-center items-center">
      <h1 className="flex flex-col items-center text-center text-[50px] font-bold">
        <div>
          It's time to <span className="text-blue-600">start</span> investing in
        </div>
        <div>yourself</div>
      </h1>
      <img
        src={FooterImage}
        alt="footerimage"
        className="max-w-[1600px] h-[600px]"
      />
      <footer className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px]  ">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-bold mb-2">About </h2>
          <p className="text-sm font-light">
            Ezitech Institute provides a platform for newcomers to launch their
            IT and freelancing careers. Our emphasis on practical information
            technology courses that are career and work oriented makes us the
            top computer institute in Rawalpindi, Islamabad, Pakistan.
          </p>
        </div>

        {/* Popular Courses */}
        <div>
          <h2 className="text-xl font-bold mb-2">Popular Courses</h2>
          <div className="flex gap-3 mb-2">
            <img src={PopularCourse1} alt="img" className="w-[30px] h-[30px]" />
            <p className="font-bold">Web Development</p>
          </div>
          <div className="flex gap-3">
            <img src={PopularCourse2} alt="img" className="w-[30px] h-[30px]" />
            <p className="font-bold">Node.js</p>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h2 className="text-xl font-bold mb-2">Pages</h2>
          <ul className="text-sm font-light list-disc list-inside">
            <li className="mb-2">BLOG</li>
            <li className="mb-2">EZICODING</li>
            <li className="mb-2">INTERNSHIP</li>
            <li className="mb-2">OUR SERVICES</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <div className="flex flex-col gap-3 ">
            <div className="flex gap-2 items-center">
              <MapPin />
              <p> 123 Main St, Anytown, USA</p>
            </div>
            <div className="flex gap-2 items-center">
              <Phone />
              <p>+123 456 7890 </p>
            </div>
            <div className="flex gap-2 items-center">
              <Mail />
              <p>info@ezitech.org </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex justify-center">
        <p className="text-sm text-white">
          Copyright &copy; 2024 Ezitech Institute. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footerimage;
