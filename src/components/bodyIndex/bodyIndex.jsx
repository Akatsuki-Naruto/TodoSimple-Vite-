import React from "react";
import About from "../layout/About/About";

import "./bodyIndex.css"

const BodyIndex = () => {
    return(
        <>
            <div className="textIndex">
                <div className="textIndex1">
                    Hi, There
                </div>
                <div className="textIndex2">Duong Hoang Thuc.</div>
                <div className="textIndex3">I build things for web</div>
                <div className="textIndex4">I am a Front-End Developer with React, Javascript.</div>
            </div>
            <About/>
        </>
       
    );
}

export default BodyIndex;