import React, { Component } from "react";
import axios from "axios";
import PortfolioItem from "./portfolio-items";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioItem: {},
    };
  }
  componentWillMount() {
    this.getPortfolioItem();
  }
  getPortfolioItem() {
    axios
      .get(
        `https://zazas.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        this.setState({
          portfolioItem: response.data.portfolio_item,
        });
      })
      .catch((error) => {
        console.log(error, "getPortfolioItemError");
      });
  }
  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url,
    } = this.state.portfolioItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    };

    return (
      <div className="portfolio-detail-wrapper">
        <div className="banner" style={bannerStyles}>
          <img src={logo_url} />
        </div>
        <div className="portfolio-detail-descriprtion-wrapper">
          <div className="description">{description}</div>
        </div>
        <div className="bottom-content-wrapper">
          <a href={url} className="site-link" target="_blank">
            Visit {name}
          </a>
        </div>
      </div>
    );
  }
}
