import React, { Component } from 'react';

 export class Addname extends Component{

    login(){
        alert("## Welcome ##")
    }
  
    render(){
        return(
            
            
            <div className="addname">
                <p>Enter your name</p>
                <input type="string" onBlur={this.onBlur} />
                
                
            </div>
        )
        
    }
}
export default Addname