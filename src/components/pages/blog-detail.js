import React, { Component } from "react";
import axios from "axios";

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {},
    };
    this.getBlogItem = this.getBlogItem.bind(this);
  }
  getBlogItem() {
    axios
      .get(
        `https://zazas.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
      )
      .then((response) => {
        console.log("getBlogItem", response);
      })
      .catch((error) => {
        console.log("getBlogItem", error);
      });
  }
  componentDidMount() {
    this.getBlogItem();
  }
  render() {
    return (
      <div>
        <h1>Blog Details</h1>
      </div>
    );
  }
}
