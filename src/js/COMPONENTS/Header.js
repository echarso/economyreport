import React from "react";
import Title from "./HEADER/Title";

export default class Header extends React.Component{
	
handleChange( e ){
    		const header = e.target.value;
    		console.log(" headr inputed => " + header );
    		this.props.changeHeader(header);
    	};

    render(){
    	this.title = this.props.title;
    	

    	return(
    		<div>
    		<header>Header {this.props.header}</header>
    		<input  onChange = {this.handleChange.bind(this)}/>
    		<Title title= {this.title} />
    		</div>
    		);
    }

}