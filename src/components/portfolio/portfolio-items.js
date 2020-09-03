import React from "react";
import { Link } from "react-router-dom";
export default function (props) {
  const { id, description, logo_url, thumb_image_url } = props.item;
  return (
    <div className="portfolio-item-wrapper">
      <img src={thumb_image_url} />
      <img src={logo_url} />
      <h2>
        <div>{description}</div>
      </h2>
      <Link to={`/portfolio/${id}`}>Link</Link>
    </div>
  );
}
