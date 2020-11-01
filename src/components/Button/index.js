import React from 'react';
import Proptypes from 'prop-types';
import './index.css';

const Button = ({ btnName = '', color = '', wide = false }) => {
  const cssClass = `btn btn-bg-color ${wide ? 'w-50' : 'w-25'}`;
  return (
    <button type="button" className={cssClass} style={{ backgroundColor: color }}>
      {btnName}
    </button>
  );
};

Button.prototypes = {
  btnName: Proptypes.string,
  className: Proptypes.string,
  wide: Proptypes.bool,
};

Button.defaultProps = {
  btnName: '',
  className: '',
  wide: false,
};

export default Button;
