import React from 'react';
import './index.scss';
import lightbulb from '../../images/lightbulb.jpg';
import catsq from '../../images/catonrails.jpg';
import AnimateImg from '../AnimateImg';
import AnimateBtn from '../AnimateBtn';

const AnimateAll = props => {
  const cat = 'https://wallpapercave.com/wp/0OBRwFi.jpg';

  return (
    <div className="animate-all">
      <AnimateImg className="img" img={cat} />

      <div className="slider-container">
        <h1 className="slide-text bounce">Coming soon...</h1>
        <div className="divider" />
        <AnimateBtn
          className="btn-appear"
          link="https://tychelabs.io/coming-soon/"
        >
          Learn more
        </AnimateBtn>
      </div>
    </div>
  );
};

export default AnimateAll;
