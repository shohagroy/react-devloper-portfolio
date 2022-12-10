import React from "react";

import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <div name="main" className="h-[100vh] w-full bg-[#0a192f] text-white">
      <div className="max-w-[1200px]  mx-auto px-6 md:px-8 flex flex-col justify-center h-full">
        <p className="text-[orangered] text-xl">Hi, My Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[white]">
          Shohag Roy
        </h1>
        <h2 className="text-4xl my-2 sm:text-7xl font-bold text-[orangered]">
          <Typewriter
            options={{
              strings: "I'm a MERN Stack Developer",
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="text-[#bcc0cb] w-full py-4 max-w-[700px]">
          I'm a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experience. Currently, I'm focused on
          building responsive full-stack web application
        </p>
        <div className="flex justify-center md:justify-start  items-center">
          <button className="text-white group border-2 px-6 py-3 my-2 font-bold flex items-center hover:bg-[orangered] hover:border-[orangered] justify-center">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <i className="fa-solid fa-arrow-right-long ml-3 "></i>
            </span>
          </button>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/14sLTR2QAgGXdV8hxbpXVXOU5I59-P14c/view?usp=share_link"
            className="text-white group ml-2  border-2 px-6 py-3 my-2 font-bold flex items-center hover:bg-[orangered] hover:border-[orangered] justify-center"
          >
            Resume
            <span className="">
              <i className="fa-solid fa-download ml-3 "></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
