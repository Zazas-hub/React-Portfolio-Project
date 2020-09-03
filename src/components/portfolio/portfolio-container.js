import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-items";
import { data } from "autoprefixer";

export default class PortfolioContainer extends Component {
  constructor() {
    super();
    this.state = {
      pageTile: "welcome to my portfolio",
      loading: false,
      data: [],
    };
    this.Category = this.Category.bind(this);
  }

  getPortfolioitems() {
    axios
      .get("https://zazas.devcamp.space/portfolio/portfolio_items")
      .then((response) => {
        // handle success
        console.log("data", response);
        this.setState({
          data: response.data.portfolio_items,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }

  Category(filter) {
    this.setState({
      data: this.state.data.filter((item) => {
        return item.type === filter;
      }),
    });
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
      <div>
        {this.state.pageTile}
        <div className="portfolio-items-wrapper">{this.PortfolioItems()}</div>
        <button onClick={() => this.Category("ecommerce")}>ecommerce</button>
        <button onClick={() => this.Category("social")}>social</button>
      </div>
    );
  }
}
