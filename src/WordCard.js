import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
const prepareStateFromWord = (give_word) =>{
    let word = give_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess:[],
        completed: false 
       } 
}
export default class WordCard extends Component{
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activateHandler = (c) => {
        let guess = [this.state.guess]+ c
        console.log("index : " + guess.length +" / " + this.state.word.length )
        this.setState({guess})
        if (guess.length === this.state.chars.length){
            if(guess === this.state.word){
                this.setState({guess: [],complete:true})
                alert("You WIN!!")
            }else{
                this.setState({guess:[],attempt:this.state.attempt+1 })
                alert("You LOSE !!  Try Agains")
            }
        }
    }

    render(){
        return(
            <div className= "App">
            { Array.from(this.state.chars).map( 
                    (c,i)=> <CharacterCard value = {c} key = {i} attempt={this.state.attempt} 
                    activateHandler={this.activateHandler}/> 
                )
            }
            <p>ครั้งที่ : {this.state.attempt}</p>
            <h1>{this.state.complete? "YOU WIN !!" : ""}</h1>
            </div>
        )
    }
}
   
       

    
    

