import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
import { Timer } from './Timer';
import { Footer } from './Footer';




const word = "HELLO"
class App extends Component {
  constructor() {
    super()
    this.state = {
      message: "Answer",
      type:""
    }
    this.answer = this.answer.bind(this);
  }

  answer(){
    this.setState({message:"HELLO"});
  }

  setName(event){
    this.setState({type:event.target.value})
  }

  begin(){
    alert("BEGIN !!")
}

  
  render() {
    return (

      <div>
         
         <div className="Center"><h1>CARD GAME</h1></div>

         <div className="setName">
            <p>Enter your name</p>
            <input type="text" onChange={this.setName.bind(this)} />
            <button onClick={this.begin}>Start game</button>
            <p>Welcome : {this.state.type}</p>

         </div>
         <br></br>

        <div className="page">
          
         <div><WordCard value = {word}/></div>
         <Timer/>
         <br></br>
         
        </div>
        <br></br>
        
        <div className="Center"><button onClick = {this.answer}>ANSWER HERE</button><p>{this.state.message}</p></div>
          
          
          
          

        <div className="page"><Footer/></div>
       
        

        

      </div>
    );
  }
}



export default App;