import React, { Component } from "react";
export default class CharacterCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }
  activate = () => {
    if(!this.state.active){
    this.props.activateHandler(this.props.value)
    this.setState({active: true})
    }
   }
  componentDidUpdate(prevProps){
    if(prevProps.attempt !== this.props.attempt){
      this.setState({active:false})
    }
  }
  render() {
    let className = `card ${this.state.active ? 'activeCard' : ' '}`
    return (
      <div className={className} onClick={this.activate}>
        {this.props.value}
      </div>
    )
  }
}