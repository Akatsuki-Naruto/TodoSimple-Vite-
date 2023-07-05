import React, { Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

import Popup from "./Popups";
import "./Navbar.css";


const Navbar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className="header">
        <h1 className="indexBtn">
          <a href="index.html">A.T</a>
        </h1>
        <div>
        <ul className="ulNavbar">
              <li className="about active">
                <a href="#aboutContent">01. About</a>
              </li>
              <li className="experience">
                <a href="#experienceContent">02. Experience</a>
              </li>
              <li className="project">
                <a href="#projectContent">03. Project</a>
              </li>
              <li className="contact">
                <a href="#contactContent">04. Contact</a>
              </li>
              <li>
                <button className="Btn resumeBtn">Resume</button>
              </li>
            </ul>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </div>
        <button
          aria-label="Menu"
          className="menuBtn"
          onClick={() => setButtonPopup(true)}
        >
          <svg
            className="openMenu"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="footer">
        <div className="contactFooter">
          <a href="https://github.com/Akatsuki-Naruto" title="github icons">
            <svg
              className="btnGithub butn"
              width="30px"
              height="30px"
              viewBox="0 0 48 48"
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs></defs>
              <path
                class="cls-1"
                d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"
              />
            </svg>
          </a>
          <a href="https://discord.gg/b285HddM">
            <svg
              className="butn"
              width="30px"
              height="30px"
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                stroke="#a2a4a4"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="12"
                d="m68 138-8 16c-10.19-4.246-20.742-8.492-31.96-15.8-3.912-2.549-6.284-6.88-6.378-11.548-.488-23.964 5.134-48.056 19.369-73.528 1.863-3.334 4.967-5.778 8.567-7.056C58.186 43.02 64.016 40.664 74 39l6 11s6-2 16-2 16 2 16 2l6-11c9.984 1.664 15.814 4.02 24.402 7.068 3.6 1.278 6.704 3.722 8.567 7.056 14.235 25.472 19.857 49.564 19.37 73.528-.095 4.668-2.467 8.999-6.379 11.548-11.218 7.308-21.769 11.554-31.96 15.8l-8-16m-68-8s20 10 40 10 40-10 40-10"
              />
              <ellipse cx="71" cy="101" fill="#a2a4a4" rx="13" ry="15" />
              <ellipse cx="121" cy="101" fill="#a2a4a4" rx="13" ry="15" />
            </svg>
          </a>
          <a href="https://join.skype.com/invite/qQ2oMrOAhW53">
            <svg
              className="butn"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 6.5C3 4.567 4.567 3 6.5 3C7.46158 3 8.33096 3.38646 8.96457 4.01487L9.37233 4.41928L9.92712 4.27091C10.5871 4.0944 11.2818 4 12 4C16.4183 4 20 7.58172 20 12C20 12.7182 19.9056 13.4129 19.7291 14.0729L19.5807 14.6277L19.9851 15.0354C20.6135 15.669 21 16.5384 21 17.5C21 19.433 19.433 21 17.5 21C16.5384 21 15.669 20.6135 15.0354 19.9851L14.6277 19.5807L14.0729 19.7291C13.4129 19.9056 12.7182 20 12 20C7.58172 20 4 16.4183 4 12C4 11.2818 4.0944 10.5871 4.27091 9.92712L4.41928 9.37233L4.01487 8.96457C3.38646 8.33096 3 7.46158 3 6.5ZM6.5 1C3.46243 1 1 3.46243 1 6.5C1 7.80334 1.45433 9.00201 2.21174 9.94417C2.07287 10.6084 2 11.2962 2 12C2 17.5228 6.47715 22 12 22C12.7038 22 13.3916 21.9271 14.0558 21.7883C14.998 22.5457 16.1967 23 17.5 23C20.5376 23 23 20.5376 23 17.5C23 16.1967 22.5457 14.998 21.7883 14.0558C21.9271 13.3916 22 12.7038 22 12C22 6.47715 17.5228 2 12 2C11.2962 2 10.6084 2.07287 9.94417 2.21174C9.00201 1.45433 7.80334 1 6.5 1ZM10.642 9.33022C10.7746 9.07725 11.2285 8.75 11.9325 8.75C13.1389 8.75 13.8044 9.22213 14.1104 9.45568C14.5494 9.79073 15.177 9.70642 15.512 9.26737C15.8471 8.82833 15.7628 8.2008 15.3237 7.86575C14.8342 7.49215 13.7474 6.74999 11.9325 6.75C10.6635 6.75 9.42503 7.34398 8.82423 8.49019C8.39003 9.31856 8.46034 10.2225 8.90141 10.9562C9.32973 11.6686 10.0731 12.1777 10.949 12.4136L12.5026 12.8321C13.101 12.9932 14.0099 13.5493 13.6826 14.2985C13.4853 14.7503 12.7859 15.25 11.7558 15.25C10.8654 15.25 10.0797 15.0961 9.35671 14.5443C8.91766 14.2093 8.29014 14.2936 7.95509 14.7326C7.62004 15.1717 7.70435 15.7992 8.1434 16.1342C9.11208 16.8735 10.1205 17.25 11.5347 17.25C13.1138 17.25 14.8369 16.6524 15.5154 15.0991C15.9148 14.1848 15.7831 13.2264 15.2841 12.4568C14.5163 11.2725 13.1937 10.9303 11.9131 10.5989C11.7643 10.5604 11.6159 10.522 11.4691 10.4824C10.9431 10.3407 10.3281 9.92911 10.642 9.33022Z"
                fill="#a2a4a4"
              />
            </svg>
          </a>
          <div className="lineIndex"></div>
        </div>
        <div className="gmail">
          <a href="mailto:thuc050701@gmail.com">
            <div className="gmailIndex">thuc050701@gmail.com</div>
          </a>
          <div className="lineIndex2"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
