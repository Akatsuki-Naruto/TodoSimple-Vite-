import React, { useState } from "react";
import clsx from "clsx";

const About = () => {
  const listLi = clsx("p-2 text-sm");
  const border = clsx(
    " absolute w-60 h-72 border-1 mt-5 ml-5 border-solid border-white z-[5] content block content-none rounded-xl ease-linear"
  );
  const border2 = clsx(
    " absolute w-60 h-72 border-1 mt-2 ml-2 border-solid border-white z-[5] content block content-none rounded-xl ease-linear"
  );
  const [isAdd, setIsAdd] = useState(true);

  const addClass = () => {
    setIsAdd(false);
  };
  const removeClass = () => {
    setIsAdd(true);
  }
  return (
    <>
      <div id="aboutContent" className={clsx(" px-0 py-24")}>
        <div
          className={clsx(
            "textTopicAbout mt-2 mb-10 text-left text-lg text-primary-1"
          )}
        >
          01.
          <span className={clsx("topicContent text-primary-2 text-xl pl-1")}>
            {" "}
            ABOUT ME{" "}
          </span>
        </div>
        <div
          className={clsx(
            "textAboutContent md:grid md:grid-cols-2 flex flex-col gap-12"
          )}
        >
          <div className={clsx("textAbout text-left")}>
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
            <ul className={clsx("listSkills list-none text-primary-1")}>
              <li className={listLi}>JavaScript (ES6+)</li>
              <li className={listLi}>React</li>
              <li className={listLi}>Figma</li>
            </ul>
          </div>
          <div>
            <div
              onMouseOver={addClass}
              onMouseOut={removeClass}
              className={clsx(
                `imgAboutD md:ml-[25%] w-60 h-72 border-1 border-solid border-white z-[6] block rounded-xl mb-6 mr-6`
              )}
            >
              <img
                onmouseover={addClass}
                onMouseOut={removeClass}
                className={clsx(
                  " absolute z-[6] border-none flex w-60 h-72 rounded-xl object-cover"
                )}
                src="../../assets/img/1155155.jpg"
                alt=""
              />

              <div className={isAdd ? border : border2}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
