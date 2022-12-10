import React from "react";

import WorkImg from "../../assets/workImg.jpeg";
import realEstate from "../../assets/realestate.jpg";

import mobileMart from "../../assets/mobile-mart.PNG";
import travelPoient from "../../assets/travel-point.PNG";
import ghooriLearning from "../../assets/ghoori-learning.PNG";

const Work = () => {
  const projects = [
    {
      _id: 1,
      img: mobileMart,
      name: "Mobile Mart – Online Shop",
      descrip:
        "<strong>Features:</strong> <br />▪ This website is made for buying and selling old mobiles, where users can log in and buy or book any mobile. <br /> ▪ Ifsomeone needs to sell old mobile then open a seller accountthere and post his mobile. <br /> ▪ If you need to buy an old mobile then you can view the mobile from here and if you like any mobile you can log in and book the mobile and later you can pay for it.",
    },
    {
      _id: 2,
      img: ghooriLearning,
      name: "Ghoori Learning",
      descrip:
        "<strong>Features:</strong> <br />▪ This website has been created to provide travel related services. <br /> ▪ There are various services here. Any user can come here to view job and see what services are offered. <br /> ▪ Here is used back end and all data is coming from back end.",
    },
    {
      _id: 3,
      img: travelPoient,
      name: "Travel Point Holiday",
      descrip:
        "<strong>Features:</strong> <br />▪ This website has been created to provide travel services related services.<br /> ▪ Here the review section is added where the client can give a review and edit or delete that review <br /> ▪ Here NoteJS backend is used and there it is connected with MongoDB.",
    },
  ];
  return (
    <div
      name="work"
      className="w-full pt-20 md:pt-0 md:h-full text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[orangered]">
            Project
          </p>
          <p className="py-6">// Check out some of my projects</p>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 gap-6 mx-2 md:mx-0">
          {projects.map((project) => (
            <div
              key={project._id}
              className=" rounded-md border border-white shadow-md bg-gray-900 text-gray-100"
            >
              <img
                src={project.img}
                alt="mobile mart"
                className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
              />
              <div className="flex flex-col justify-between p-4 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold tracking-wide">
                    {project.name}
                  </h2>
                  <p
                    className="text-gray-100 flex"
                    dangerouslySetInnerHTML={{
                      __html: project.descrip.slice(0, 160),
                    }}
                  />{" "}
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[orangered] text-white"
                >
                  Read more
                </button>
              </div>
            </div>
          ))}

          {/* <div>
            <div className=" rounded-md shadow-md bg-gray-900 text-gray-100">
              <img
                src="https://source.unsplash.com/random/300x300/?2"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracking-wide">
                    Donec lectus leo
                  </h2>
                  <p className="text-gray-100">
                    Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                    eget.
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900"
                >
                  Read more
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Work;
