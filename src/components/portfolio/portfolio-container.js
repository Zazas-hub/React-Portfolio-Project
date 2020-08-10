import React ,{Component} from "react";

import PortfolioItem from "./portfolio-items";

export default class PortfolioContainer extends Component{
    render(){
        return(
            <div>
                <h2>
                    new component created...
                </h2>
                <PortfolioItem/>
            </div>
        )
    }
}