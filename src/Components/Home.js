import React from "react";
import Landing from "./Landing";
import AboutMe from "./AboutMe";
import Navigation from "./Navbar";
import ContactMe from "./ContactMe";
import MySkills from "./Skills";
import Education from "./Education";
import Project from "./Project";

const Home = (props) => {
  return (
    <div className="home-container">
      <Navigation />
      <Landing />
      <AboutMe />
      <Education />
      <Project />
      <MySkills />
      <ContactMe />
    </div>
  );
};

export default Home;
