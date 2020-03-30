import React from 'react';
import './App.css';
import Calculator from "./components/Calculator";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Retirement Calculator 2.0</p>
        </header>
        <div className = "body-container">
        <div className = "App-body">
        <Calculator/>
        <Results/>
        </div>
        </div>
    </div>
  );
}

export default App;
