import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
        <div>           
        <NavLink exact to="/" activeClassName='nav-link-active'> Home </NavLink>
        <NavLink to="/About-me" activeClassName='nav-link-active'>About</NavLink>
        <NavLink to="/Contact-us" activeClassName='nav-link-active'>Contact-us</NavLink>
        <NavLink to="/Blog" activeClassName='nav-link-active'>Blog</NavLink>
      </div>
    );
  }
}
