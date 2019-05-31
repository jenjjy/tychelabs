import React from 'react';
import logo from './logo.svg';
import './App.scss';
import AnimateBtn from './components/AnimateBtn';
import AnimateAll from './components/AnimateAll';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AnimateAll />
      </header>
    </div>
  );
}

export default App;
