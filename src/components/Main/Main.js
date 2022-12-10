import React from "react";

import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <div name="main" className="h-[100vh] w-full bg-[#0a192f] text-white">
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full">
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
        <p className="text-[#bcc0cb] py-4 max-w-[700px]">
          I'm a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experience. Currently, I'm focused on
          building responsive full-stack web application
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 font-bold flex items-center hover:bg-[orangered] hover:border-[orangered] justify-center">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <i class="fa-solid fa-arrow-right-long ml-3 "></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
