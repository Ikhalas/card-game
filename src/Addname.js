import React, { Component } from 'react';

 export class Addname extends Component{

    begin(){
        alert("BEGIN !!")
    }
  
    render(){
        return(
            
            
            <div className="addname">
                <p>Enter your name</p>
                <input type="text" id="userName" name="userName" />
                <button onClick={this.begin}>Start game</button>
                
                
            </div>
        )
        
    }
}
export default Addname