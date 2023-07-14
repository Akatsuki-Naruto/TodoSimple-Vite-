import React from "react";
import clsx from "clsx";

const Contact = () => {
  return (
    <>
      <div id="contactContent" className={clsx(" py-24 ")}>
        <div className={clsx("textTopicContact mt-2 mb-10 text-center text-base text-primary-1 font-normal italic")}>04. What’s Next?</div>

        <div className={clsx("getInTouch text-3xl font-bold mb-7")}>GET IN TOUCH</div>

        <div className={clsx("textContact text-base font-['Gill'] text-primary-3 mb-10")}>
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </div>

        <a href="mailto:thuc050701@gmail.com">
          <button className={clsx("btn contactBtn bg-primary-4 text-white border-1 border-white border-solid hover:text-black hover:bg-primary-5 py-2 px-4")}>Say Hello!</button>
        </a>
      </div>
    </>
  );
};

export default Contact;
