import React from "react";
import { Link } from  "react-router";

export default class Page1 extends React.Component{
	
    render(){
             const {params} = this.props;	
    	  	return(
    		<div>
    			<h1> My Page 3 { params.param}</h1>
                <p> here would be page 3 layout and staff </p>
    			
    		</div>
    		);
    }


}