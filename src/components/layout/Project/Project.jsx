import React from "react";

import "./Project.css";
import CallAPI from "../../Api/callAPI";

const Work = () => {
  return (
    <>
      <div id="projectContent">
        <div className="textTopicProject">
          03.
          <span className="topicProject">Some Things I’ve Built</span>
        </div>
        <div>
          <CallAPI />
        </div>
      </div>
    </>
  );
};

export default Work;
