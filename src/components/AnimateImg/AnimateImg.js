import React, { Component } from 'react';
import './index.scss';

const AnimateBtn = ({ props, img }) => {
  console.log(props);
  return <img src={img} className="animate-img" alt="" {...props} />;
};

export default AnimateBtn;
