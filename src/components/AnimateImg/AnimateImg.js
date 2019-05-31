import React from 'react';
import './index.scss';

const AnimateBtn = (props, { img }) => {
  console.log(props);
  return (
    <div className="img-wrapper">
      <img src={props.img} className="animate-img" alt="" />
    </div>
  );
};

export default AnimateBtn;
