import React, { useState } from 'react';
import './App.css';
import Calculator from "./components/Calculator";
import Results from "./components/Results";

function App() {
  const [result, setResult] = useState({
    age: "0",
    retirementAge: "0", 
    currentSavings: "0", 
    monthlyContribution: "0",
    retirementSavings: "0"
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Retirement Calculator 2.0</h1>
        </header>
        <div className = "body-container">
        <div className = "App-body">
        <Calculator setResult = {setResult} />
        <Results result = {result} />
        </div>
        </div>
    </div>
  );
}

export default App;
