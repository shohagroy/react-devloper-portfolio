import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work";

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
