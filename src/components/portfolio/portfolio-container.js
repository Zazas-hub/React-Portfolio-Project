import React ,{Component} from "react";

import PortfolioItem from "./portfolio-items";


export default class PortfolioContainer extends Component{
    constructor(){
        super();
        this.state={
            pageTile:'welcome to my portfolio',
            loading:false,
            data :[
                {title:'Drip.com', type:'ecommerce' , slug:'drip'},
                {title:'No-Colledge.com',type:'social', slug:'nocolledge'},
                {title:'Easy-Checkout.com',type:'ecommerce',slug:'checkout'},
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
        return <PortfolioItem title={item.title} slug={item.slug}/>;
        });
}
    render(){
        if (this.state.loading){
            return <div>Loading...</div>
        }
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