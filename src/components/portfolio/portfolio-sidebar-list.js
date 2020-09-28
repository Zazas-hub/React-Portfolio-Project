import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PortfolioSidebarList = (props) => {
  const PortfolioList = props.data.map((PortfolioItem) => {
    return (
      <div key={PortfolioItem.id} className="portfolio-item-thumb">
        <div className="portfolio-thumb-img">
          <img src={PortfolioItem.thumb_image_url} />
        </div>
        <div className='text-content'>
        <div className="title">{PortfolioItem.name}</div>
        <div className='actions'>

        <a className='action-icon' onClick={() => props.handleEditClick(PortfolioItem)}>
          <FontAwesomeIcon icon="edit" className='icon'/>
        </a>

        <a className='action-icon' onClick={() => props.handleDeleteClick(PortfolioItem)}>
          <FontAwesomeIcon icon="trash" className='icon'/>
        </a>
        </div>
        </div>
      </div>
    );
  });
  return <div className="portfolio-sidebar-list-wrapper">{PortfolioList}</div>;
};
export default PortfolioSidebarList;
