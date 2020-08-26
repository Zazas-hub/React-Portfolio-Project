import React ,{Component} from "react";

import PortfolioItem from "./portfolio-items";
import { data } from "autoprefixer";

export default class PortfolioContainer extends Component{
    constructor(){
        super();
        this.state={
            pageTile:'welcome to my portfolio',
            data :[
                {title:'Drip.com', type:'ecommerce'},
                {title:'No-Colledge.com',type:'social'},
                {title:'Easy-Checkout.com',type:'ecommerce'},
            ]
            }
            this.Category=this.Category.bind(this);
    }
    Category(filter){
        this.setState({data:
        this.state.data.filter(item=>{
            return item.type === filter
        })
        })
    }

    PortfolioItems(){
        return this.state.data.map(item=>{
        return <PortfolioItem title={item.title}/>;
        });
}
    render(){
        return(
            <div>
                {this.state.pageTile}
                {this.PortfolioItems()}
                <button onClick={()=>this.Category('ecommerce')}>ecommerce</button>
                <button onClick={()=>this.Category('social')}>social</button>
            </div>
        )
    }
}