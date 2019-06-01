import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const AnimateBtn = props => {
  return (
    <div className="btn-wrapper" {...props}>
      <button className="btn-slider">
        <a href={props.link} className="btn-content">
          {props.children}
        </a>
      </button>
    </div>
  );
};
AnimateBtn.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default AnimateBtn;
