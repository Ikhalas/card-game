import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
import { Timer } from './Timer';


const word = "HELLO"
class App extends Component {
  render() {
    return (

      <div>
         <div className="Center"><h1>CARD GAME</h1></div>

        <div className="page">
         <div><WordCard value = {word}/></div>
         <Timer/>
         
        </div>

        

      </div>
    );
  }
}



export default App;