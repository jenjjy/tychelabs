import React from 'react';
import logo from './logo.svg';
import lightbulb from './images/lightbulb.jpg';
import './App.scss';
import AnimateImg from './components/AnimateImg';
import AnimateBtn from './components/AnimateBtn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AnimateImg img={lightbulb} />
        <AnimateBtn link="https://tychelabs.io/coming-soon/">
          Learn more
        </AnimateBtn>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
