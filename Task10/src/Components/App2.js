import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
// Exports & returns my class component to be rendered 
export default class Header extends React.Component{
	render(){
		return( 
			<>
			<nav id="nav">
			<header>
			<Link className="navBar" to="/">Play</Link>
			<Link className="navBar" to="/App1">About</Link>
			<Link className="navBar" to="/App3">Help</Link>
			</header>
			</nav>
			</>
			

			)
	}
}