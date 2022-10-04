import React from "react";
import { useState } from "react";

const Header = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#0a192f] text-white fixed w-full ">
      <nav className="flex justify-between h-20 items-center px-10 m-auto">
        <img src="" alt="Logo-HTML" className="z-10" />

        <span onClick={()=> setToggle(!toggle)} className="md:hidden block cursor-pointer z-10">
        {
            toggle ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
           : <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        }
      </span>
      <ul className={`${toggle ? 'top-20' : 'top-[-800px]'} z-1 duration-500 bg-[#0a192f] md:flex absolute md:static left-0 text-center top-20 w-full md:w-auto`}>
          <li className="md:py-2 md:px-5 md:text-sm text-2xl py-10 m-5 md:m-0">
            <a href="">Home</a>
          </li>
          <li className="md:py-2 md:px-5 md:text-sm text-2xl py-10 m-5 md:m-0">
            <a href="">About</a>
          </li>
          <li className="md:py-2 md:px-5 md:text-sm text-2xl py-10 m-5 md:m-0">
            <a href="">Experience</a>
          </li>
          <li className="md:py-2 md:px-5 md:text-sm text-2xl py-10 m-5 md:m-0">
            <a href="">Work</a>
          </li>
          <li className="md:py-2 md:px-5 md:text-sm text-2xl py-10 m-5 md:m-0">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="hidden md:block fixed top-[50%] flex flex-col w-[160px]">
        
        <div className="p-2 bg-blue-500 text-white relative left-[-90px] hover:left-0 h-16 duration-300 border-r-4 ">
            <a className="flex justify-between px-2 items-center" href="">Linkedin
            <i className="fa-brands fa-linkedin text-3xl pl-5 p-2"></i></a>
        </div>

        <div className="p-2 bg-[#333333] text-white relative left-[-90px] hover:left-0 h-16 duration-300 border-r-4 ">
            <a className="flex justify-between px-2 items-center" href="">GitHub
            <i className="fa-brands fa-github text-3xl pl-5 p-2"></i></a>
        </div>

        <div className="p-2 bg-[#6fc2b0] text-white relative left-[-90px] hover:left-0 h-16 duration-300 border-r-4 ">
            <a className="flex justify-between px-2 items-center" href="">Email
            <i className="fa-regular fa-envelope text-3xl pl-5 p-2"></i></a>
        </div>

        <div className="p-2 bg-blue-700 text-white relative left-[-90px] hover:left-0 h-16 duration-300 border-r-4 ">
            <a className="flex justify-between px-2 items-center" href="">Facebook
            <i className="fa-brands fa-square-facebook text-3xl pl-5 p-2"></i></a>
        </div>

        <div className="p-2 bg-[#565f69] text-white relative left-[-90px] hover:left-0 h-16 duration-300 border-r-4">
            <a className="flex justify-between px-2 items-center" href="">Facebook
            <i className="fa-solid fa-file-pdf text-3xl pl-5 p-2"></i></a>
        </div>

      </div>
    </div>
  );
};

export default Header;
