import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  const handleSignOut = () => {
    axios
      .delete("https://api.devcamp.space/logout", { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccesfulLogout();
        }
        return response.data;
      })
      .catch((error) => {
        console.log("error signing out", error);
      });
  };
  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            HOME
          </NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/About-me" activeClassName="nav-link-active">
            ABOUT
          </NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/Contact-us" activeClassName="nav-link-active">
            CONTACT
          </NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/Blog" activeClassName="nav-link-active">
            BLOG
          </NavLink>
        </div>
        {props.loggedInStatus === "LOGGED_IN"
          ? dynamicLink("/portfolio-mananger", "Portfolio Mananger")
          : null}
      </div>
      <div className="right-side">
        BRAN-KINGSLEY  CHI
        {props.loggedInStatus === "LOGGED_IN" ? (
          <a onClick={handleSignOut}>
            <FontAwesomeIcon icon="sign-out-alt" />
          </a>
        ) : null}
      </div>
    </div>
  );
};
export default withRouter(NavigationComponent);
