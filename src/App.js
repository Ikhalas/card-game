import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import logo from './logo.svg';
import './App.css';


const word = "Hello";
class App extends Component {
  render() {
    return (
      <div>
        {
          Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
        }
 </div>


    );
  }
}

export default App;
