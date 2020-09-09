import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/NavigationContainer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Auth from "./pages/Auth";

import PortfolioDetail from "./portfolio/PortfolioDetail";
import Nomatch from "./pages/Nomatch";

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <Router>
          <NavigationContainer />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/About-me" component={About} />
              <Route path="/Contact-us" component={Contact} />
              <Route path="/Blog" component={Blog} />
              <Route path="/Auth" component={Auth} />
              <Route path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={Nomatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
