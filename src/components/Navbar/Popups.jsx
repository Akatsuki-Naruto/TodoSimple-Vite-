import clsx from "clsx";
import React from "react";
import { CloseIcon } from "../../assets/svg";

function Popup(props) {
  const ulPopupA = clsx("text-primary-19");
  const ulPopupLi = clsx("pb-[20px] w-60 h-10 items-center flex justify-center my-10");

  const handleReturn = () => {
    const handleClick = () => {
      props.setTrigger(false);
    }
    handleClick();
    props.triggerAc((current) => !current);
  }

  return props.trigger ? (
    <div className={clsx("PopupList ")}>
      <ul
        className={clsx(
          "ulPopup flex items-center text-opacity-100 list-none m-0 p-0 box-border flex-col fixed top-0 bg-primary-22 right-0 w-1/2 h-screen pt-20 md:hidden"
        )}
      >
        <li className={ulPopupLi} onClick={handleReturn}>
          <a className={ulPopupA} href="#aboutContent">
            01. About
          </a>
        </li>
        <li className={ulPopupLi} onClick={handleReturn}>
          <a className={ulPopupA} href="#experienceContent">
            02. Experience
          </a>
        </li>
        <li className={ulPopupLi} onClick={handleReturn}>
          <a className={ulPopupA} href="#projectContent">
            03. Project
          </a>
        </li>
        <li className={ulPopupLi} onClick={handleReturn}>
          <a className={ulPopupA} href="#contactContent">
            04. Contact
          </a>
        </li>
        <li className={ulPopupLi}>
          <button
            className={clsx(
              "Btn resumePopupBtn flex border-[1px] border-solid items-center border-l-primary-20 rounded-md px-4 py-2"
            )}
          >
            Resume
          </button>
        </li>
      </ul>
      <div onClick={handleReturn} className={clsx("fixed w-1/2 top-0 left-0 h-screen bg-primary-23 md:hidden")}></div>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Popup;
