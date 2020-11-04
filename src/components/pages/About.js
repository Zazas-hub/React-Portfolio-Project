import React, { Component } from "react";
import loginImage from "../../../static/assets/images/login.jpg";

export default function () {
  return (
    <div>
      <div className="content-page-wrapper">
        <div
          className="left-column"
          style={{
            backgroundImage: `url(${loginImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="right-column">
          <div>
            <h1>
              Hi my name is Bran and I like building awesome software !!. I've
              built diversed cataloge of web applications , from ecommerce to
              Enterprise . If you are interested, you can view some of my
              favorite projects in my portfolio on the HOME Page .I look foward
              to Providing value to you and the world .Thanks
            </h1>
          </div>
          <div className='technical-content'>
            <h2>
              The tools I use most frequently include: JAVASCRIPT , NODE.js ,
              PYTHON with the framework REACT being my stronghold .As well
              software ; GIT , WINDOWS , SQL ,MONGO DB .
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
