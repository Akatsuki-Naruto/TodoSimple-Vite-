import React from "react";

import "./About.css";

const About = () => {
  return (
    <>
      <div id="aboutContent">
        <div className="textTopicAbout ">
          01.
          <span className="topicContent"> ABOUT ME </span>
        </div>
        <div id="textAboutContent">
          <div className="textAbout">
            <div className="textAbout1">
              Hello! There, I'm Front-End developer.
            </div>
            <br />
            <div className="textAbout2">
              I have experience with REACT, Android Development, Social media
              API expert and 1 years of web application development.
            </div>
            <br />
            <div className="textAbout3">
              I believe in client satisfaction. I need an opportunity to prove
              my skills. Just a talk and we can have a better understanding and
              can work together for a long time.
            </div>
            <br />
            <div className="textAbout4">
              I have also have been involved in maintaining versions of source
              code using <a href="https://github.com/Akatsuki-Naruto">GIT</a>. I
              have also designed and developed web user controls, pages, CSS
              files using technologies like AJAX Toolkit, JavaScript, Bootstrap
              UI controls, HTML.
            </div>
            <div>Qualifications and experience:</div>
            <ul className="listSkills">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Figma</li>
            </ul>
          </div>
          <div>
            <div className="imgAboutD">
              {/* <img className="imgAbout" src="" alt="" /> */}
            </div>
            {/* <div className="borderBackground"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
