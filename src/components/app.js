import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import NavigationContainer from "./navigation/NavigationContainer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/blog-detail";
import Auth from "./pages/Auth";

import PortfolioDetail from "./portfolio/PortfolioDetail";
import PortfolioMananger from "./pages/portfolio-mananger";
import Nomatch from "./pages/Nomatch";
import Icons from "../helpers/icons";
export default class App extends Component {
  constructor(props) {
    super(props);
    Icons();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
    };
    this.handleSuccesfulLogin = this.handleSuccesfulLogin.bind(this);
    this.handleUnsuccesfulLogin = this.handleUnsuccesfulLogin.bind(this);
    this.handleSuccesfulLogout = this.handleSuccesfulLogout.bind(this);
  }
  handleSuccesfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN",
    });
  }
  handleUnsuccesfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
  }
  handleSuccesfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
  }

  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials: true,
      })
      .then((response) => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;
        console.log("response", response);
        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
          });
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();  
  }
  authorizedPages() {
    return [
      <Route
        key="porfolio-mananger"
        path="/portfolio-mananger"
        component={PortfolioMananger}
      />,
    ];
  }

  render() {
    return (
      <div className="container">
        <Router>
          <NavigationContainer
            loggedInStatus={this.state.loggedInStatus}
            handleSuccesfulLogout={this.handleSuccesfulLogout}
          />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/About-me" component={About} />
              <Route path="/Contact-us" component={Contact} />
              <Route
                path="/blog"
                render={(props) => (
                  <Blog {...props} loggedInStatus={this.state.loggedInStatus} />
                )}
              />
              <Route
                path="/b/:slug"
                render={(props) => (
                  <BlogDetail
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />

              {this.state.loggedInStatus === "LOGGED_IN"
                ? this.authorizedPages()
                : null}
              <Route
                path="/auth"
                render={(props) => (
                  <Auth
                    {...props}
                    handleSuccesfulLogin={this.handleSuccesfulLogin}
                    handleUnsuccesfulLogin={this.handleUnsuccesfulLogin}
                  />
                )}
              />

              <Route path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={Nomatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
