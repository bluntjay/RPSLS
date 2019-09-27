import React from "react";
import "./App.css";
import Header from "./App2.js"
// Exports & returns my class component to be rendered 
export default class RPS extends React.Component{
// Creates counters for the user & computers score
 userPoints = 0;
 compPoints = 0;
// Function that creates the computers move at random
  getComputerPlay(){
    var plays = ["rock", "paper","scissors","lizard","spock"];
    var play = plays[Math.floor(Math.random()*plays.length)];
    return play;
  }
  // Function that allows the user to reset the game
  resGame(){
    window.location.reload()
  }

// Function that writes the plays made by both player & the computer
  play(e){
    let userScore = document.getElementById("userScore")
    let compScore = document.getElementById("compScore")
    const compPlay = this.getComputerPlay();
    document.getElementById("status").innerHTML = "You played " + e.target.id + "." + "The computer played " + compPlay + "."

// Logic behind if a user chooses "Rock" & increments the score of the user or computer & non of them if it is a tie
    if (e.target.id === "rock"){
      if(compPlay === "rock"){
        document.getElementById("status").innerHTML += "\n You tied!";
      } else if (compPlay === "paper"){
        document.getElementById("status").innerHTML += "\n You lose!";
        compScore.innerText = parseInt(compScore.innerText)+1;
      } else if (compPlay === "scissors"){
        document.getElementById("status").innerHTML +=  "\n You win!";
        userScore.innerText = parseInt(userScore.innerText)+1;
      }else if(compPlay === "lizard"){
        document.getElementById("status").innerHTML += "\n You lose!";
        compScore.innerText = parseInt(compScore.innerText)+1;
      }else if (compPlay === "spock"){
        document.getElementById("status").innerHTML +=  "\n You win!";
        userScore.innerText = parseInt(userScore.innerText)+1;
      }
      // Logic behind if a user chooses "Paper" & increments the score of the user or computer & non of them if it is a tie
    } else if(e.target.id === "paper"){
      if (compPlay === "rock"){
        document.getElementById("status").innerHTML += "\n You win!";
        userScore.innerText = parseInt(userScore.innerText)+1;
      }else if(compPlay ==="paper"){
        document.getElementById("status").innerHTML += "\n You tied!";
      }else if (compPlay === "scissors"){
        document.getElementById("status").innerHTML += "\n You lose!";
        compScore.innerText = parseInt(compScore.innerText)+1
      }else if(compPlay === "lizard"){
        document.getElementById("status").innerHTML +=  "\n You win!";
        userScore.innerText = parseInt(userScore.innerText)+1;
      }else if(compPlay === "spock"){
        document.getElementById("status").innerHTML += "\n You lose!";
        compScore.innerText = parseInt(compScore.innerText)+1
      }
      // Logic behind if a user chooses "Scissors" & increments the score of the user or computer & non of them if it is a tie
    }else if (e.target.id === "scissors"){
      if (compPlay === "rock"){
        document.getElementById("status").innerHTML += "\n You lose!";
        compScore.innerText = parseInt(compScore.innerText)+1;
      } else if(compPlay === "paper"){
        document.getElementById("status").innerHTML += "\n You win!";
        userScore.innerText = parseInt(userScore.innerText)+1;
      } else if (compPlay === "scissors"){
        document.getElementById("status").innerHTML += "\n You tied!"
      }else if(compPlay === "lizard"){
        document.getElementById("status").innerHTML += "\n You lose!";
        compScore.innerText = parseInt(compScore.innerText)+1
      }else if(compPlay === "spock"){
        document.getElementById("status").innerHTML +=  "\n You win!";
        userScore.innerText = parseInt(userScore.innerText)+1;
      }
      // Logic behind if a user chooses "Lizard" & increments the score of the user or computer & non of them if it is a tie
    }else if(e.target.id === "lizard"){
      if (compPlay === "rock"){
        document.getElementById("status").innerHTML += "\n You lose!";
        compScore.innerText = parseInt(compScore.innerText)+1;
      }else if(compPlay === "paper"){
       document.getElementById("status").innerHTML +=  "\n You win!";
        userScore.innerText = parseInt(userScore.innerText)+1;
      }else if(compPlay === "scissors"){
        document.getElementById("status").innerHTML += "\n You lose!";
        compScore.innerText = parseInt(compScore.innerText)+1
      }else if(compPlay === "lizard"){
      document.getElementById("status").innerHTML += "\n You tied!";
      }else if(compPlay === "spock"){
        document.getElementById("status").innerHTML +=  "\n You win!";
        userScore.innerText = parseInt(userScore.innerText)+1;
      }
      // Logic behind if a user chooses "Spock" & increments the score of the user or computer & non of them if it is a tie
    }else if(e.target.id === "spock"){
      if (compPlay === "rock"){
       document.getElementById("status").innerHTML +=  "\n You win!";
       userScore.innerText = parseInt(userScore.innerText)+1;
      }else if(compPlay === "paper"){
        document.getElementById("status").innerHTML += "\n You lose!";
        compScore.innerText = parseInt(compScore.innerText)+1;
      }else if(compPlay === "scissors"){
       document.getElementById("status").innerHTML +=  "\n You win!";
       userScore.innerText = parseInt(userScore.innerText)+1;
      }else if(compPlay === "spock"){
      document.getElementById("status").innerHTML += "\n You tied!";
      }else if(compPlay === "lizard"){
        document.getElementById("status").innerHTML += "\n You lose!";
        compScore.innerText = parseInt(compScore.innerText)+1;
      }
  }
}

  render(){

    return( 
      <div>
    {/*Creates a score board to keep track of point*/}
      <div id="scoreBoard">
      <h2><u>Scores:</u></h2>
      <table id="board">
      <tbody>
      <tr>
      <td className="aspects" >You:</td>
      <td className="aspects" >Computer:</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
{/*Implements counter for the points for the user & computer*/}
      <th  id="userScore">0</th>
      <th  id="compScore">0</th>
      <div id="theScore">
      </div>
      </tr>
      </tfoot>
      </table>
      </div>
      <h2><u>How to play:</u></h2>
      <p>Choose between Rock, Paper, Scissors, Lizard or Spock & try defeat you opponent</p>
      <div id="moves">
      <h2><u>Choose Your Move:</u></h2>
{/*Lets user choose a move to make*/}
      <button className="choice" id="rock" onClick={this.play.bind(this)}>Rock 👊</button>
      <button className="choice" id="paper" onClick={this.play.bind(this)}>Paper ✋️</button>
      <button className="choice" id="scissors" onClick={this.play.bind(this)}>Scissors ✌️</button>
      <button className="choice" id="lizard" onClick={this.play.bind(this)}>Lizard 🦎</button>
      <button className="choice" id="spock" onClick={this.play.bind(this)}>Spock 🖖</button>
      <div id="status"></div>
{/*Button allows user to restart the game*/}
      <button id="res" onClick={this.resGame}>Restart</button>
      </div>

      
     


      </div>      
      )
  }
}


 

 

  