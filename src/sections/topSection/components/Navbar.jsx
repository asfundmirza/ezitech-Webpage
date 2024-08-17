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
            <div class="flex flex-col items-center ">
              <img src={Logo} alt="logo" className=" h-[70px] w-[200px]" />
            </div>
            <nav className="flex-1 ">
              <ul className="flex gap-5 justify-center font-bold">
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
                <Heart />
              </div>
              <div className="border-[2px] p-1 border-white">
                <Search className="w-4 h-4" />
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
