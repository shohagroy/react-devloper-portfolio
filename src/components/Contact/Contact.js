import React from "react";
import {
  hideDialog,
  hideMessenger,
  MessengerChat,
  setMessengerBottomSpacing,
  showDialog,
  showMessenger,
} from "react-messenger-chat-plugin";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] pt-20 flex justify-center flex-col items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/5255c9c4-ec4b-4fcb-aafb-6c14740263db"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[orangered] text-gray-300">
            Contact
          </p>

          <div className="py-6 text-xl md:text-2xl font-semibold text-white">
            <div className="flex items-center p-2">
              <span className=" w-[40px] h-[40px] text-center p-1 bg-[orangered] rounded-full border border-white">
                <i class="fa-solid fa-envelope"></i>
              </span>
              <p className="ml-4">shohagroy27@gmail.com</p>
            </div>

            <div className="flex items-center p-2">
              <span className=" w-[40px] h-[40px] text-center p-1 bg-[orangered] rounded-full border border-white">
                <i class="fa-brands fa-whatsapp"></i>
              </span>
              <p className="ml-4">+880 1760 567555</p>
            </div>

            <div className="flex items-center p-2">
              <span className=" w-[40px] h-[40px] text-center p-1 bg-[orangered] rounded-full border border-white">
                <i class="fa-brands fa-skype"></i>
              </span>
              <p className="ml-4">shohagroy@yahoo.com</p>
            </div>

            <div className="flex items-center p-2">
              <span className=" w-[40px] h-[40px] text-center p-1 bg-[orangered] rounded-full border border-white">
                <i class="fa-solid fa-house-chimney"></i>
              </span>
              <p className="ml-4">Rangpur, Bangladesh</p>
            </div>
          </div>

          <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-gray-400" />
            <p className="px-3 text-white text-2xl font-bold">OR</p>
            <hr className="w-full dark:text-gray-400" />
          </div>
          <p className="text-gray-300">
            // Submit the form below to send me a short message
          </p>
        </div>
        <input
          className="bg-[white] p-2"
          type="text"
          placeholder="Name"
          name="Name"
          required
        />
        <input
          className="my-4 p-2 bg-white"
          type="email"
          placeholder="Email"
          name="Email"
          required
        />
        <textarea
          className="bg-[white] p-2"
          name="Massage"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-[orangered] hover:border-[orangered] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
