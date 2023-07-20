import React from "react";

import CallAPI from "../Api/callAPI";
import clsx from "clsx";

const Work = () => {
  return (
    <>
      <div id="projectContent" className={clsx("projectContent py-[100px] ")}>
        <div className={clsx("mt-[10px] mb-10 text-lg text-primary-1")}>
          03.
          <span className={clsx("topicProject text-primary-2 text-xl pl-[5px]")}>Some Things I’ve Built</span>
        </div>
        <div>
          <CallAPI />
        </div>
      </div>
    </>
  );
};

export default Work;