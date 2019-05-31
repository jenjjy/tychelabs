import React from 'react';
import './index.scss';

const AnimateBtn = props => {
  console.log(props);
  return (
    <div className="btn-wrapper" {...props}>
      <button className="animate-btn btn-filler">
        <a href={props.link}>{props.children}</a>
      </button>
    </div>
  );
};

export default AnimateBtn;
