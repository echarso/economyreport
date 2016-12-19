import React from "react";
import { Link } from  "react-router";

export default class Page1 extends React.Component{
	
    render(){
    

	
		//timeout()   	
    	  	console.log(this.props);
            const paramPassed= this.props.route.haris;
            const {params} = this.props;
            return(
    		<div>

    			<h1> My Page 2 {params.param} ( { paramPassed}  ) </h1>
                <p> here would be page 2 !!!! layout and staff </p>
    			
    		</div>
    		);
    }


}