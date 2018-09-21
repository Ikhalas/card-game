import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
import { Timer } from './Timer';
import { Footer } from './Footer';
import { Addname } from './Addname';


const word = "HELLO"
class App extends Component {

  
  render() {
    return (

      <div>
         
         <div className="Center"><h1>CARD GAME</h1></div>
         <div className="Center"><Addname/></div>
         <br></br><br></br>

        <div className="page">
         <div><WordCard value = {word}/></div>
         <Timer/>
         <br></br>
         
        </div>
        <h1> </h1><br></br><br></br><br></br>
        
        <div className="page"><Footer/></div>
       
        

        

      </div>
    );
  }
}



export default App;