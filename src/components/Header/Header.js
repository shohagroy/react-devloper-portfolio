import React from "react";
import { useState } from "react";

import logo from '../../assets/logo.png';

import {Link} from 'react-scroll';

const Header = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#0a192f] text-white fixed w-full ">
      <nav className="flex justify-between h-20 items-center px-10 m-auto">
        <img src={logo} alt="Logo-HTML" className="z-[20] w-28" />

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
      <ul className={`${toggle ? 'top-20' : 'top-[-800px]'} z-[10] duration-500 bg-[#0a192f] md:flex absolute md:static left-0 text-center top-20 w-full md:w-auto ${toggle ? 'h-screen' : 'h-auto'}`}>
          <li className="md:py-2 md:px-5 md:text-sm text-2xl hover:text-[orangered] sm:py-5 m-5 md:m-0 cursor-pointer">
            <Link to='main' smooth={true} duration={500} >Home</Link>
          </li>
          <li className="md:py-2 md:px-5 md:text-sm text-2xl hover:text-[orangered]sm:py-5 m-5 md:m-0 cursor-pointer">
          <Link to='about' smooth={true} duration={500} >About</Link>
          </li>
          <li className="md:py-2 md:px-5 md:text-sm text-2xl hover:text-[orangered]sm:py-5 m-5 md:m-0 cursor-pointer">
          <Link to='skills' smooth={true} duration={500} >Skills</Link>
          </li>
          <li className="md:py-2 md:px-5 md:text-sm text-2xl hover:text-[orangered] sm:py-5 m-5 md:m-0 cursor-pointer">
          <Link to='work' smooth={true} duration={500} >Work</Link>
          </li>
          <li className="md:py-2 md:px-5 md:text-sm text-2xl hover:text-[orangered]sm:py-5 m-5 md:m-0 cursor-pointer">
          <Link to='contact' smooth={true} duration={500} >Contact</Link>
          </li>
        </ul>
      </nav>


      <div className="hidden md:block fixed top-[30%] flex flex-col w-[160px]">

        <div className="p-2 bg-blue-500 text-white relative left-[-90px] hover:left-0 h-16 duration-300 border-r-4 hover:border-[orangered] ">
            <a className="flex justify-between px-2 items-center" href="https://www.linkedin.com/in/shohag-roy-850a82236/" target='_'>Linkedin
            <i className="fa-brands fa-linkedin text-3xl pl-5 p-2"></i></a>
        </div>

        <div className="p-2 bg-[#333333] text-white relative left-[-90px] hover:left-0 h-16 duration-300 border-r-4 hover:border-[orangered] ">
            <a className="flex justify-between px-2 items-center" href="https://github.com/shohagroy" target='_'>GitHub
            <i className="fa-brands fa-github text-3xl pl-5 p-2"></i></a>
        </div>

        <div className="p-2 bg-[#6fc2b0] text-white relative left-[-90px] hover:left-0 h-16 duration-300 border-r-4 hover:border-[orangered] ">
            <a className="flex justify-between px-2 items-center" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCMcnzvfQCcsZmpPlqRdzTVPdHmhjWSnCvLRndRfcjDLSkSfTngDxnMjQFkCwkchdLXHJM" target='_'>Email
            <i className="fa-regular fa-envelope text-3xl pl-5 p-2"></i></a>
        </div>

        <div className="p-2 bg-blue-700 text-white relative left-[-90px] hover:left-0 h-16 duration-300 border-r-4 hover:border-[orangered] ">
            <a className="flex justify-between px-2 items-center" href="https://www.facebook.com/shohagroy.7771/" target='_'>Facebook
            <i className="fa-brands fa-square-facebook text-3xl pl-5 p-2"></i></a>
        </div>

        <div className="p-2 bg-[#565f69] text-white relative left-[-90px] hover:left-0 h-16 duration-300 border-r-4 hover:border-[orangered]">
            <a className="flex justify-between px-2 items-center" href="https://doc-0s-7c-apps-viewer.googleusercontent.com/viewer/secure/pdf/1ujdt653q9d4tf2qg8n4s0j1ol5g90gv/vv84m10ak5db5427bn31s5vttvpmbe35/1664911425000/drive/06628696055127066530/ACFrOgB9Y8gBRb5yhGe-Rdjdrp_pzfQwTeZr-HwX3XUxcw1bVuYlXPn62r8X4vCDPgFvMua3xwjLfzUnAYgBBzC_N8_CBbVJZEIV3PgMs1qriwwA2LEf1fQy4NLPYn0dFw_jCmt-yEGlSu7sIDGV?print=true&nonce=lkbrbd0b3j944&user=06628696055127066530&hash=nam0ri0nhfc4pv9ql4et6iu87lu7gsbe" target='_'>CV
            <i className="fa-solid fa-file-pdf text-3xl pl-5 p-2"></i></a>
        </div>

      </div>
    </div>
  );
};

export default Header;
