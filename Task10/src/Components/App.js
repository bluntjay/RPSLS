import React from "react";
import "./App.css";
// Imports my different components from their files
import Header from "./App2.js"
import RPS from './App4.js';
import About from "./App1.js";
import Help from "./App3.js";
import {Route, BrowserRouter} from "react-router-dom";
// Exports & returns my class component to be rendered 
export default class App extends React.Component{
  render(){
    return(
      // Routes my different parent pages so they are able together 
    <BrowserRouter>
      <Header/>
      <Route exact path="/" component={RPS}/>
      <Route path="/App1" component={About}/>
      <Route path="/App3" component={Help}/>
      </BrowserRouter>
      )
  }
}


 

 

  