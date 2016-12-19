import React from "react";
import { Link } from  "react-router";
import Header from "./Header";

export default class Layout extends React.Component{
	
    render(){
    

	
		//timeout()   	
    	  	return(
    		<div>
    			<h1> Your economy Report </h1>
    			<Link to="header"> Header</Link>
    			<Link to="page2"> Page2</Link>
    			<Link to="page3"> <div> Page3</div></Link>
    			---------------------
    			{this.props.children}
    			
    		</div>
    		);
    }


}