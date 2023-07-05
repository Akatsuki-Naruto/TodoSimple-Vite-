import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div id="contactContent">
        <div className="textTopicContact">04. What’s Next?</div>

        <div className="getInTouch">GET IN TOUCH</div>

        <div className="textContact">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </div>

        <a href="mailto:thuc050701@gmail.com">
          <button className="btn contactBtn">Say Hello!</button>
        </a>
      </div>
    </>
  );
};

export default Contact;
