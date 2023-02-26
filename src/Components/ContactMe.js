import React from "react";
import linkedIn from "./linkedin.png";
import github from "./github.png";

const ContactMe = (props) => {
  return (
    <div id="contact-container">
      <h2>Contact Me</h2>
      <br></br>
      <div className="email-address">b.morsekarzen@gmail.com</div>
      <div className="links-container">
        <a
          href="https://www.linkedin.com/in/brooke-stenglein/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} alt="linkedIn-png" />
        </a>
        <a href="https://github.com/bmorseka" target="_blank" rel="noreferrer">
          <img src={github} alt="GitHub-png" id="github" />
        </a>
        <a
          href="https://drive.google.com/file/d/1cQbSZWPq439sg9drKwMmtAaEAD5eBo0R/view"
          filename="BrookeStenglein_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume"
        >
          resume
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
