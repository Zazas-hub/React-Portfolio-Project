import React, { Component } from 'react';
import moment from "moment"


import PortfolioContainer from "./portfolio/portfolio-container";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <PortfolioContainer/>
        <PortfolioContainer/>
        <PortfolioContainer/>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')};
        </div>
      </div>
    );
  }
}
