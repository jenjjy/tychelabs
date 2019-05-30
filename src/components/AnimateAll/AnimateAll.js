import React from 'react';
import './index.scss';

const AnimateAll = ({ props, children, link }) => {
  return (
    <div className="btn-wrapper">
      <button className="animate-btn" {...props}>
        <a href={link}>{children}</a>
      </button>
    </div>
  );
};

export default AnimateAll;
