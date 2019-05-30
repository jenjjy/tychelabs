import React from 'react';
import './index.scss';
import lightbulb from '../../images/lightbulb.jpg';
import AnimateImg from '../AnimateImg';
import AnimateBtn from '../AnimateBtn';

const AnimateAll = ({ props, children, link }) => {
  return (
    <div className="App">
      <header className="App-header">
        <AnimateImg img="https://wallpapercave.com/wp/0OBRwFi.jpg" />

        <div className="slider-container">
          <h1 className="slide-text">{children}</h1>
          <div className="divider" />
          <AnimateBtn link="https://tychelabs.io/coming-soon/">
            Learn more
          </AnimateBtn>
        </div>
      </header>
    </div>
  );
};

export default AnimateAll;
