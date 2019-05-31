import React from 'react';
import './index.scss';
import lightbulb from '../../images/lightbulb.jpg';
import catSq from '../../images/catonrails.jpg';
import AnimateImg from '../AnimateImg';
import AnimateBtn from '../AnimateBtn';

const AnimateAll = ({ props, children, link }) => {
  const cat = 'https://wallpapercave.com/wp/0OBRwFi.jpg';
  const abstract =
    'https://wallpik.com/wp-content/uploads/2019/04/stock-cool-cool-background-stock.jpg';

  return (
    <div className="animate-all">
      <AnimateImg className="img" img={lightbulb} />

      <div className="slider-container">
        <h1 className="slide-text bounce">Coming soon...</h1>
        <div className="divider lightSpeedIn" />
        <AnimateBtn link="https://tychelabs.io/coming-soon/">
          Learn more
        </AnimateBtn>
      </div>
    </div>
  );
};

export default AnimateAll;
