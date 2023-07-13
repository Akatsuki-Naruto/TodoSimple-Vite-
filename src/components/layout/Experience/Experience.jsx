import React from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import "./Experience.css";

const Experience = () => {
  const topic = clsx("list list-none pl-5 font-[Times New Roman] hover:text-primary-8 hover:border-l-1px hover:border-l-solid hover:border-l-primary-8 hover:bg-primary-9 focus:outline-none focus:border-l-1px focus:border-l-solid focus:border-l-primary-8 rounded-none border-l-1px border-l-solid border-l-primary-10");
  const tabPanels = clsx("tabPanels");
  const exp = clsx ("text-left")
  const name = clsx("text-lg text-primary-2")
  const time = clsx("text-13px font-[Franklin] text-primary-6 mt-1 mb-5")
  const infor = clsx("leading-loose text-primary-7")
  const listMajor = clsx("list-none pl-5 font-[Times New Roman]")

  return (
    <>
      <div className={clsx("experienceContent py-24")}>
        <div className={clsx("textTopicExp mt-2 mb-10 text-left text-lg text-primary-1")}>
          02.
          <span className={clsx("topicExp text-primary-2 text-xl pl-1")}>Where I’ve Worked</span>
        </div>
        <Tab.Group>
          <div className={clsx("tabGroup grid ")}>
            <Tab.List className={clsx("tabList flex flex-col font-[Courier] text-secondary-300")}>
              <Tab className={topic}>School</Tab>
              <Tab className={topic}>Work</Tab>
            </Tab.List>
            <Tab.Panels className={tabPanels}>
              <Tab.Panel>
                <div className={exp}>
                  <div className={name}>
                    National Economic University (
                    <a href="https://www.neu.edu.vn/">NEU</a>)
                  </div>
                  <div className={time}>Sep 2019 - Dec 2023</div>
                  <div className={infor}>
                    Major: Information of Technology
                    <ul className={listMajor}>
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
                <div className={exp}>
                  <div className={name}>
                    Newwave Solutions(<a href="https://newwave.vn/">NWS</a>)
                  </div>
                  <div className={time}>Start job: June 2023</div>
                  <div className={infor}>
                    Position: Front-End Developer
                    <ul className={listMajor}>
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
