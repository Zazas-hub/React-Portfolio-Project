import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import BlogItem from "../blog/blog-item";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      blogItems: [],
    };
    this.getBlogItems = this.getBlogItems.bind(this);
    this.activateInfiniteScroll();
  }
  activateInfiniteScroll() {
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 ===
        document.documentElement.offsetHeight
      ) {
        console.log("get more posts");
      }
    };
  }
  getBlogItems() {
    axios
      .get("https://zazas.devcamp.space/portfolio/portfolio_blogs", {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          blogItems: response.data.portfolio_blogs,
        });
      })
      .catch((error) => {
        console.log("getBlogItems", error);
      });
  }

  componentDidMount() {
    this.getBlogItems();
  }
  render() {
    const blogRecords = this.state.blogItems.map((blogItem) => {
      return <BlogItem key={blogItem.id} blogItem={blogItem} />;
    });
    return (
      <div className="blog-container">
        <div className="content-container">
          <div>{blogRecords}</div>
        </div>
      </div>
    );
  }
}
