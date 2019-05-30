import React from 'react';
import './index.scss';

const AnimateBtn = ({ props, children, link }) => {
  return (
    <div className="btn-wrapper">
      <button className="animate-btn" {...props}>
        <a href={link}>{children}</a>
      </button>
    </div>
  );
};

export default AnimateBtn;
