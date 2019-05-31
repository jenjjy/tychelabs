import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const AnimateBtn = props => {
  console.log(props);
  return (
    <div className="btn-wrapper" {...props}>
      <button className="">
        <a href={props.link}>{props.children}</a>
      </button>
    </div>
  );
};
AnimateBtn.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default AnimateBtn;
