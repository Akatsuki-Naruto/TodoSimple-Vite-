import React, { Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

import Popup from "./Popups";
import "./Navbar.css";
import clsx from "clsx";
import { CloseIcon, DiscordIcon, GithubIcon, MenuIcon, SkypeIcon } from "../../assets/svg";


const Navbar = () => {
  const footerButn = clsx("mb-[5px]")

  const indexA = clsx("text-primary-18 text-2xl text-center flex items-center fixed z-40")
  const navbarA = clsx("text-primary-19")
  const navbarLi = clsx("p-3 active:border-b-primary-20 active:border-b-solid active:border-b-1")

  const [buttonPopup, setButtonPopup] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const handleChange = () => {
    const handleClick = () => {
      setButtonPopup(!buttonPopup);
    }
    handleClick();
    setIsActive((current) => !current);
  }

  return (
    <>
      <div className={clsx("header fixed flex top-0 left-0 right-0 pl-8 pr-8 justify-between h-20 z-15 bg-primary-16 shadow-header backdrop-blur-md text-opacity-100")}>
        <h1 className={clsx("indexBtn w-min py-4 font-bold m-0 text-opacity-100 leading-9")}>
          <a className={indexA} href="index.html">A.T</a>
        </h1>
        <div>
        <ul className={clsx("ulNavbar flex items-center text-opacity-100 list-none m-0 p-0 box-border  m-md:hidden")}>
              <li className={navbarLi}>
                <a className={navbarA} href="#aboutContent">01. About</a>
              </li>
              <li className={navbarLi} >
                <a className={navbarA} href="#experienceContent">02. Experience</a>
              </li>
              <li className={navbarLi} >
                <a className={navbarA} href="#projectContent">03. Project</a>
              </li>
              <li className={navbarLi} >
                <a className={navbarA} href="#contactContent">04. Contact</a>
              </li>
              <li className={navbarLi}>
                <button className={clsx("Btn resumeBtn flex border-1 border-solid rounded-md border-primary-20 px-2")}>Resume</button>
              </li>
            </ul>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup} triggerAc={setIsActive}/>
        </div>
        <button
          aria-label="Menu"
          className={clsx("menuBtn bg-primary-4 p-0 mt-5 h-fit w-fit items-center flex hover:text-primary-8 border-none md:hidden z-20")}
          onClick={handleChange}
        >
          {isActive ? <MenuIcon/>: <CloseIcon/>}
        </button>
      </div>
      <div className={clsx("footer m-md:hidden")}>
        <div className={clsx("contactFooter md:fixed md:z-[17] md:left-5 md:bottom-0 ")}>
          <a href="https://github.com/Akatsuki-Naruto" title="github icons">
            <GithubIcon className={footerButn}/>
          </a>
          <a href="https://discord.gg/b285HddM">
            <DiscordIcon className={footerButn}/>
          </a>
          <a href="https://join.skype.com/invite/qQ2oMrOAhW53">
            <SkypeIcon className={footerButn}/>
          </a>
          <div className={clsx("lineIndex block w-[1px] h-24 mx-auto bg-primary-21 mt-3")}></div>
        </div>
        <div className={clsx("gmail fixed z-[17] right-5 bottom-0")}>
          <a className={clsx("text-primary-21 hover:text-primary-20 ")} href="mailto:thuc050701@gmail.com">
            <div className={clsx("gmailIndex fixed right-[-26.5px] bottom-[165px] rotate-90 text-xs")}>thuc050701@gmail.com</div>
          </a>
          <div className={clsx("lineIndex2 block w-[1px] h-[90px] mr-5 bg-primary-21 mt-0")}></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
