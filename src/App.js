import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex';
import Pokecard from './Pokecard';


function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Pokedex</h1>
      </div>
      <div>
        <Pokedex />
      </div> 
    </div>
  );
}

export default App;
