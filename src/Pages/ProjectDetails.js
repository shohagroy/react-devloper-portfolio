import React from "react";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  return (
    <div className="bg-[#0a192f] text-white fixed w-full ">
      <nav className="flex justify-between h-20 z-50 items-center px-4 md:px-10 m-auto">
        {/* <img src={logo} alt="Logo-HTML" className="z-[20] w-28" /> */}
        <div>
          <Link to="main" smooth={true} duration={500}>
            <p className="cursor-pointer font-serif text-3xl font-bold">
              Portfolio.
            </p>
          </Link>
        </div>

        <div>
          <Link
            to="/"
            className="md:py-2  md:px-5 duration-200 md:text-sm text-2xl hover:text-[orangered] sm:py-5 m-5 md:m-0 cursor-pointer"
          >
            <p
              className="flex items-center text-xl"
              smooth={true}
              duration={500}
            >
              <span className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </span>{" "}
              <span className="hidden md:block">Home</span>
            </p>
          </Link>
        </div>
      </nav>

      <div className="hidden md:block fixed top-[30%] flex flex-col w-[160px]">
        <div className="p-2 bg-blue-500 text-white relative left-[-90px] hover:left-0 h-16 duration-300 border-r-4 hover:border-[orangered] ">
          <a
            className="flex justify-between px-2 items-center"
            href="https://www.linkedin.com/in/shohag-roy-850a82236/"
            target="_"
          >
            Linkedin
            <i className="fa-brands fa-linkedin text-3xl pl-5 p-2"></i>
          </a>
        </div>

        <div className="p-2 bg-[#333333] text-white relative left-[-90px] hover:left-0 h-16 duration-300 border-r-4 hover:border-[orangered] ">
          <a
            className="flex justify-between px-2 items-center"
            href="https://github.com/shohagroy"
            target="_"
          >
            GitHub
            <i className="fa-brands fa-github text-3xl pl-5 p-2"></i>
          </a>
        </div>

        <div className="p-2 bg-[#6fc2b0] text-white relative left-[-90px] hover:left-0 h-16 duration-300 border-r-4 hover:border-[orangered] ">
          <a
            className="flex justify-between px-2 items-center"
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCMcnzvfQCcsZmpPlqRdzTVPdHmhjWSnCvLRndRfcjDLSkSfTngDxnMjQFkCwkchdLXHJM"
            target="_"
          >
            Email
            <i className="fa-regular fa-envelope text-3xl pl-5 p-2"></i>
          </a>
        </div>

        <div className="p-2 bg-blue-700 text-white relative left-[-90px] hover:left-0 h-16 duration-300 border-r-4 hover:border-[orangered] ">
          <a
            className="flex justify-between px-2 items-center"
            href="https://www.facebook.com/shohagroy.7771/"
            target="_"
          >
            Facebook
            <i className="fa-brands fa-square-facebook text-3xl pl-5 p-2"></i>
          </a>
        </div>

        <div className="p-2 bg-[#565f69] text-white relative left-[-90px] hover:left-0 h-16 duration-300 border-r-4 hover:border-[orangered]">
          <a
            className="flex justify-between px-2 items-center"
            href="https://drive.google.com/file/d/14sLTR2QAgGXdV8hxbpXVXOU5I59-P14c/view?usp=share_link"
            target="_"
          >
            RESUME
            <i className="fa-solid fa-file-pdf text-3xl pl-5 p-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
