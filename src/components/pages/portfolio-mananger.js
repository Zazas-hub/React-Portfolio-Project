import React, { Component } from "react";
import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";
import axios from "axios";

export default class PortfolioMananger extends Component {
  constructor() {
    super();
    this.state = {
      portfolioItems: [],
    };
    this.handleSuccesfullFormSubmission = this.handleSuccesfullFormSubmission.bind(
      this
    );
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }
  handleDeleteClick(portfolioItem) {
    axios
      .delete(
        `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
        { withCredentials: true }
      )
      .then((response) => {
     this.setState({
       portfolioItems:this.state.portfolioItems.filter(item=>{
         return item.id !== portfolioItem.id;
       })
     })
     return response.data;
      })
      .catch((error) => {
        console.log("handleDeleteClick", error);
      });
  }
  handleSuccesfullFormSubmission(portfolioItem) {
    this.setState({
      portfolioItems: [portfolioItem].concat(this.state.portfolioItems),
    });
  }
  handleFormSubmissionError(error) {
    console.log("error in handle form submition ", error);
  }
  getPortfolioItem() {
    axios
      .get(
        "https://zazas.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc",
        { withCredentials: true }
      )
      .then((response) => {
        console.log("portfolio items ", response);
        this.setState({
          portfolioItems: [...response.data.portfolio_items],
        });
      })
      .catch((error) => {
        console.log("something went wrong in portfolio-mananger ", error);
      })
      .then(() => {});
  }
  componentDidMount() {
    this.getPortfolioItem();
  }
  render() {
    return (
      <div className="portfolio-mananger-container">
        <div className="left-column">
          <PortfolioForm
            handleFormSubmissionError={this.handleFormSubmissionError}
            handleSuccesfullFormSubmission={this.handleSuccesfullFormSubmission}
          />
        </div>
        <div className="right-column">
          <PortfolioSidebarList
            data={this.state.portfolioItems}
            handleDeleteClick={this.handleDeleteClick}
          />
        </div>
      </div>
    );
  }
}
