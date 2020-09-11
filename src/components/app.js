import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/NavigationContainer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Auth from "./pages/Auth";

import PortfolioDetail from "./portfolio/PortfolioDetail";
import Nomatch from "./pages/Nomatch";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
    };
    this.handleSuccesfulLogin = this.handleSuccesfulLogin.bind(this);
    this.handleUnsuccesfulLogin = this.handleUnsuccesfulLogin.bind(this);
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
  render() {
    return (
      <div className="container">
        <Router>
          <NavigationContainer />
          <div>
            <h2>{this.state.loggedInStatus}</h2>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/About-me" component={About} />
              <Route path="/Contact-us" component={Contact} />
              <Route path="/Blog" component={Blog} />

              <Route
                path="/Auth"
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
