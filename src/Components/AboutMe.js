import React from "react";
import { Card } from "react-bootstrap";
import headshot from "./profilePic.jpg";

const AboutMe = (props) => {
  return (
    <section id="about-me-container">
      <h2 id="about-header">About Me</h2>
      <div className="about-parent">
        <Card id="about-card">
          <Card.Body>
            <Card.Text id="about-me-para">
              I'm Brooke Stenglein. For ten years I worked in the psychology
              field, where I earned my doctorate in Clinical Forensic
              Psychology. I conducted forensic and neuropsychological
              evaluations as well as therapy. While I loved working with my
              clients, I decided to make a career transition and try something
              new. I completed the Grace Hopper program at Fullstack Academy in
              the spring of 2022, an all-womens immersive software development
              bootcamp. There I learned fullstack JavaScript developement,
              React, Redux, Node, Express, Sequelize, SQL, PostgreSQL, and HTML
              and CSS fundamentals. I currently work for Across Healthcare as a
              Software Engineer.
            </Card.Text>
          </Card.Body>
        </Card>
        <img src={headshot} alt="headshot" className="headshot" />
      </div>
    </section>
  );
};

export default AboutMe;
