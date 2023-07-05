import React from "react";

function Popup(props) {
  return props.trigger ? (
    <div className="PopupList">
      <button className="closeMenuBtn" onClick={() => props.setTrigger(false)}>
        <svg
          className="closeMenu"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <ul className="ulPopup">
        <li className="aboutPopup active">
          <a href="#aboutContent">01. About</a>
        </li>
        <li className="experiencePopup">
          <a href="#experienceContent">02. Experience</a>
        </li>
        <li className="projectPopup">
          <a href="#projectContent">03. Project</a>
        </li>
        <li className="contactPopup">
          <a href="#contactContent">04. Contact</a>
        </li>
        <li>
          <button className="Btn resumePopupBtn">Resume</button>
        </li>
      </ul>
      {/* <div className="motionBlur"></div> */}
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Popup;
