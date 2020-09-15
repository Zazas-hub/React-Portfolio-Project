import React, { Component } from "react";
import axios from "axios";


export default class PortfolioMananger extends Component {
  constructor() {
    super();
    this.state = {
      portfolioItems: [],
    };
  }
  getPortfolioItem() {
    axios
      .get("https://zazas.devcamp.space/portfolio/portfolio_items",{withCredentials:true})
      .then((response) => {
          console.log('portfolio items ',response);
        this.setState({
          portfolioItems: [...response.data.portfolio_items],
        });
      }).catch((error)=>{
          console.log('something went wrong in portfolio-mananger ' ,error )
      }
     ).then(()=>{
     })

  }
  componentDidMount(){
      this.getPortfolioItem();
  }
  render() {
    return (
      <div className="portfolio-mananger-container">
        <div className="left-column">
          <h1>form-content....</h1>
        </div>
        <div className="right-column">
          <h1>right-bar</h1>
        </div>
      </div>
    );
  }
}
