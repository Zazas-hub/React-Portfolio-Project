import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink to="/About-me" activeClassName="nav-link-active">
              About
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink to="/Contact-us" activeClassName="nav-link-active">
              Contact-us
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink to="/Blog" activeClassName="nav-link-active">
              Blog
            </NavLink>
          </div>
        </div>
        <div className="right-side">BRAN CHEMBAH</div>
      </div>
    );
  }
}
