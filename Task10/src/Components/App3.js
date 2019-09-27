import React from "react";
// Imports Header component
import Header from "./App2.js";
// Imports image from its folder
import RPSLS from "../Images/RPSLS.jpg";
// Exports & returns my class component to be rendered 
// An array that stores all the rules of the game
const rules = ["Scissors cuts Paper","Paper covers Rock","Rock crushes Lizard","Lizard poisons Spock","Spock smashes Scissors","Scissors decapitates Lizard","Lizard eats Paper","Paper disproves Spock","Spock vaporizes Rock","Rock crushes scissors"]
export default class Help extends React.Component{
	render(){
		return(
			<>
			<Header />
			<h2><u><b>Need Some Help?</b></u></h2>
			<p>This game is a twist on the classical Rock, Paper, Scissors by adding 2 new choices - Lizard & Spock</p>
			<img id="RPSLS"src={RPSLS}/>
			<h3><u>Rules:</u></h3>
			<ul>
			<li>{rules[0]}</li>
			<li>{rules[1]}</li>
			<li>{rules[2]}</li>
			<li>{rules[3]}</li>
			<li>{rules[4]}</li>
			<li>{rules[5]}</li>
			<li>{rules[6]}</li>
			<li>{rules[7]}</li>
			<li>{rules[8]}</li>
			<li>{rules[9]}</li>
			</ul>
			</>

			)
	}
} 