import React from "react";

const MySkills = (props) => {
  return (
    <>
      <div id="skills-container">
        <div>
          <h1 className="skills-header">Skills</h1>
        </div>
        <div className="skill-list">
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Playwright</li>
          </ul>
          <ul>
            <li>Sequelize</li>
            <li>Node.js</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git and GitHub</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MySkills;
