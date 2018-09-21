import React, { Component } from 'react';


export class Timer extends Component{
    constructor(props){
        super(props)
        this.state = {
            time: 0
        }
        setInterval(() => {
            this.setState({
                time: this.state.time+1
            })
        },1000) //1000 = 1 second
    }
    
    render(){
        let {time} = this.state
        return(
            <div>Time: {time}</div>
        )
        
    }
}
export default Timer 