import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {
          <WordCard value="hello"/>
        }
 </div>


    );
  }
}

export default App;
