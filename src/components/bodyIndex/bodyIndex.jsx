import React from "react";

import About from "../layout/About";
import "./bodyIndex.css";
import Experience from "../layout/Experience";
import Project from "../layout/Project/Project";
import Contact from "../layout/Contact";
import clsx from "clsx";
import { DiscordIcon, GithubIcon, SkypeIcon } from "../../assets/svg";

const BodyIndex = () => {
  const footerA = clsx("flex px-3");
  const butn = clsx("flex md:hidden");

  return (
    <>
      <div>
        <div
          className={clsx(
            "textIndex flex text-left flex-col justify-center leading-tight min-h-screen py-72 z-10"
          )}
        >
          <div className={clsx("textIndex1 text-primary-11 text-base pb-2")}>
            Hi, There
          </div>
          <div className={clsx("textIndex2 text-primary-12 text-6xl pb-3")}>
            Duong Hoang Thuc.
          </div>
          <div className={clsx("textIndex3 text-primary-13 text-4xl pb-2")}>
            I build things for web
          </div>
          <div className={clsx("textIndex4 text-primary-14 text-sm")}>
            I am a Front-End Developer with React, Javascript.
          </div>
        </div>
        <About />
        <Experience />
        <Project />
        <Contact />
        <div
          className={clsx(
            "relative flex items-center justify-center text-center pb-3 m-0 md:hidden "
          )}
        >
          <a
            className={footerA}
            href="https://github.com/Akatsuki-Naruto"
            title="github icons"
          >
            <GithubIcon className={butn} />
          </a>
          <a className={footerA} href="https://discord.gg/b285HddM">
            <DiscordIcon className={butn} />
          </a>
          <a
            className={footerA}
            href="https://join.skype.com/invite/qQ2oMrOAhW53"
          >
            <SkypeIcon className={butn} />
          </a>
        </div>
        <div className="author">
          <a
            className={clsx("text-primary-15 text-sm font-thin italic")}
            href="https://github.com/Akatsuki-Naruto"
          >
            Design & Built by Duong Hoang Thuc
          </a>
        </div>
      </div>
    </>
  );
};

export default BodyIndex;
