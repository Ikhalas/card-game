import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <CharacterCard value="h"/>
        <CharacterCard value="i"/>
      </div>

    );
  }
}

export default App;
