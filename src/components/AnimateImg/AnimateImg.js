import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const AnimateImg = props => {
  return (
    <div className="img-wrapper">
      <img src={props.img} className="animate-img" alt="" />
    </div>
  );
};

AnimateImg.propTypes = {
  img: PropTypes.string.isRequired
};

export default AnimateImg;
