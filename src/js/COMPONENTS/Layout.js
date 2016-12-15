import React from "react";

import Header from "./Header";

export default class Layout extends React.Component{
	
	constructor(){
		super();
		this.state = { name : " Harry "};
		this.name = " Harrys ";
	}

	changeHeader( header ){
		console.log(" I took name " + header );
		this.setState({name:header});

	}
    render(){
    

		var list = [
			<Header header="1" changeHeader = {this.changeHeader.bind(this)} title={this.state.name} />,
			<Header header="2" title="2.2" />,
			<Header header="3" title="3.3" />,
			<Header header="4" title="4.4" />,
		]; 
		//timeout()   	
    	return(
    		<div>
    		{list}
    		{this.state.name}
    		</div>
    		);
    }

}