import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-items";

export default class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = {
      pageTile: "welcome to my portfolio",
      loading: false,
      data: [],
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  getPortfolioitems(filter = null) {
    axios
      .get("https://zazas.devcamp.space/portfolio/portfolio_items")
      .then((response) => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter((item) => {
              return item.category === filter;
            }),
          });
        } else {
          console.log("data", response);
          this.setState({
            data: response.data.portfolio_items,
          });
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioitems();
    } else {
      this.getPortfolioitems(filter);
    }
  }
  componentDidMount() {
    this.getPortfolioitems();
  }

  PortfolioItems() {
    //   needed data
    //   background image:"thumb_image_url"
    //   logo :"logo_url"
    //   discription :"description"
    //   id  :"id"
    return this.state.data.map((item) => {
      console.log("portfolioitem", item);
      return <PortfolioItem item={item} key={item.id} />;
    });
  }
  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button
            className="btn"
            onClick={() => this.handleFilter("CLEAR_FILTERS")}
          >
            All
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("eCommerce")}
          >
            eCommerce
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Scheduling")}
          >
            Scheduling
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Enterprise")}
          >
            Enterprise
          </button>
        </div>
        <div className="portfolio-items-wrapper">{this.PortfolioItems()}</div>
      </div>
    );
  }
}
