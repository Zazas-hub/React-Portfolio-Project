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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
          aspernatur ut architecto ducimus quis reprehenderit voluptatibus ullam
          rem quos similique, dolores exercitationem veritatis. Necessitatibus,
          libero?
        </div>
      </div>
    </div>
  );
}
