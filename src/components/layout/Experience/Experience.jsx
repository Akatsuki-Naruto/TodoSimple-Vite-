import React from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import "./Experience.css";

const Experience = () => {
  const tabList = clsx("tabList");
  const list = clsx("list");
  const tabPanels = clsx("tabPanels");

  return (
    <>
      <div id="experienceContent">
        <div className="textTopicExp">
          02.
          <span className="topicExp">Where I’ve Worked</span>
        </div>
        <Tab.Group>
          <div className="tabGroup">
            <Tab.List className={tabList}>
              <Tab className={list}>School</Tab>
              <Tab className={list}>Work</Tab>
            </Tab.List>
            <Tab.Panels className={tabPanels}>
              <Tab.Panel>
                <div className="schoolExp">
                  <div className="nameUniversity">
                    National Economic University (
                    <a href="https://www.neu.edu.vn/">NEU</a>)
                  </div>
                  <div className="timeStudy">Sep 2019 - Dec 2023</div>
                  <div className="inforMajor">
                    Major: Information of Technology
                    <ul className="listSubject">
                      Subject:
                      <li>C++</li>
                      <li>Java</li>
                      <li>SQL Server</li>
                      <li>Python</li>
                      <li>Javascript</li>
                      <li>React</li>
                    </ul>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="workExp">
                  <div className="nameCompany">
                    Newwave Solutions(<a href="https://newwave.vn/">NWS</a>)
                  </div>
                  <div className="timeWork">Start job: June 2023</div>
                  <div className="inforJob">
                    Position: Front-End Developer
                    <ul className="listLanguage">
                      Language code:
                      <li>Javascript</li>
                      <li>React</li>
                    </ul>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </>
  );
};

export default Experience;
