import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/topSection/ezitech-logo.png";
import { Heart } from "lucide-react";
import { Search } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/", name: "About Us" },
    { path: "/", name: "Certifications" },
    { path: "/", name: "Careers" },
    { path: "/", name: "Seminars" },
    { path: "/", name: "Tech Blogs" },
    { path: "/", name: "IPortal Login" },
  ];
  return (
    <>
      <div className="flex w-full text-white relative z-20  ">
        <div className="flex w-full justify-center">
          <div class="flex justify-between pt-5 w-full max-w-[1200px] px-2  items-center">
            <div class="flex  items-center ">
              <img
                src={Logo}
                alt="logo"
                className=" h-auto w-[150px] lg:w-[200px]"
              />
            </div>
            <nav className="hidden md:flex justify-center ">
              <ul className="flex gap-5 justify-center font-bold text-xs lg:text-sm ">
                {navLinks.map((link) => (
                  <li key={link.name}>{link.name}</li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              <div className="flex h-full">
                <div className="w-[1px] h-[30px] bg-gray-400  border-solid opacity-20"></div>
              </div>
              <div className=" hover:bg-green-400 rounded-full p-2">
                <Heart className="lg:w-7 w-4 h-auto" />
              </div>
              <div className="border-[2px] p-1 border-white">
                <Search className="lg:w-4 w-2 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-full h-[1px] bg-gray-200  border-solid opacity-20 "></div>
      </div>
    </>
  );
};

export default Navbar;
