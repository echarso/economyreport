import React from "react";
import ReactDOM from "react-dom";


import {Router , Route , IndexRoute , hashHistory  } from "react-router";

import Layout from "./COMPONENTS/Layout";
import Header from "./COMPONENTS/Header";
import Page1  from "./Pages/Page1"; 
import Page2  from "./Pages/Page2"; 
import Page3  from "./Pages/Page3"; 

const app = document.getElementById('app');
const paramTobePassed = "Mpla Mpla ";

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Page1}></IndexRoute>

			<Route path="/header" component = {Header}> </Route>
			<Route path="page2(/:param)" haris={paramTobePassed} component = {Page2}> </Route>
			<Route path="page3(/:param)" component = {Page3}> </Route>
		</Route>
	</Router>
	,
app);