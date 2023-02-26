import React from "react";

const Education = (props) => {
  return (
    <section id="edu-container">
      <h2>Education</h2>
      <div className="education-container">
        <div className="education-card">
          <h3>Bates College, 2008-2012</h3>
          <p>Bachelor of Arts</p>
          <ul>
            <li>Double Major in Psychology and History</li>
            <li>Minor in Russian Language Studies</li>
          </ul>
          {/* <img src={BatesLogo} alt="Bates_Logo" className="Bates_logo" /> */}
        </div>
        <div className="education-card">
          <h3>The Chicago School of Professional Psychology, 2012-2017</h3>
          <p>Doctor of Psychology in Clinical Forensic Psychology</p>
          <ul>
            <li>
              Forensic Postdoctoral Fellowship/Staff Psychologist, 2017-2019
            </li>
            <li>Neuropsychology Postdoctoral Fellowship, 2019-2021</li>
          </ul>
          {/* <img src={TCSPPLogo} alt="TCSPP_Logo" className="TCS_logo" /> */}
        </div>
        <div className="education-card">
          <h3>The Grace Hopper Program at Fullstack Academy, 2022</h3>
          <p>Software Development</p>
          <ul>
            <li>
              Completed a 17-week immersive software engineering program focused
              on full-stack JavaScript development.
            </li>
            <li>Created two deployed fullstack group projects.</li>
          </ul>
          {/* <img src={GHLogo} alt="GH_Logo" className="GH_logo" /> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
