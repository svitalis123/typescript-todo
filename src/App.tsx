import React from 'react';
import './App.css';

function App() {
  const add= (a:number, b:number):number => {
    return a*b
  }
  return (
    <div className="App">
      <header className="App-header">
        {add(12,17)}
      </header>
    </div>
  );
}

export default App;
