import React, { Component } from "react";
import {Link} from 'react-router-dom';
export default function () {
  return (
  <div> 
    <h1>Blog</h1>
    <Link to="/About-me">read more about me</Link>
  </div>
  );
}
