import React, { Component } from 'react';
import './index.scss';

const AnimateBtn = ({ props, img }) => {
  console.log(props);
  return (
    <div {...props}>
      <img src={img} className="animate-img" alt="" {...props} />
      {/* {children} */}
    </div>
  );
};

export default AnimateBtn;
