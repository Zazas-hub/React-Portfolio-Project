import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <div className="contact-bullet-points">
            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="phone" />
              </div>
              <div className="text">202-823-9027</div>
            </div>
            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="envelope" />
              </div>
              <div className="text">bran12chembah@outlook.com</div>
            </div>
            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="map-marked-alt" />
              </div>
              <div className="text">DC-Maryland-Virginia (DMV)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
