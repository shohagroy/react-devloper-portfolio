import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
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
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            pkshohag240@gmail.com
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
