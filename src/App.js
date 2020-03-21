import React from 'react';
import underConstruction from './under_construction.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={underConstruction} className="App-logo" alt="underConstruction" />
        <a
          className="App-link"
          href="https://whatwouldjoedou.azurewebsites.net/"
          target="_blank"
          rel="noopener noreferrer"
          >
          Famo-space
        </a>
        <a
          className="App-link"
          href="https://http://joedou.github.io/sudoku//"
          target="_blank"
          rel="noopener noreferrer"
          >
          Sudoku
        </a>
      </header>
    </div>
  );
}

export default App;
