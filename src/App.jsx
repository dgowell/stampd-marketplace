import React from 'react';
import minimaLogo from './minima_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="container">
        <img src={minimaLogo} className="logo" alt="logo" />
        <h1>Hello from V2</h1>
      </section>
    </div>
  );
}

export default App;
