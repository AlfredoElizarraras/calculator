import React from 'react';
import Proptypes from 'prop-types';
import './index.css';

const Button = ({ btnName = '', color = '', wide = '' }) => {
  const cssClass = `btn btn-bg-color ${wide ? 'w-50' : 'w-25'}`;
  return (
    <button type="button" className={cssClass} style={{ backgroundColor: color }}>
      {btnName}
    </button>
  );
};

Button.prototypes = {
  btnName: Proptypes.string,
  color: Proptypes.string,
  wide: Proptypes.bool,
};

Button.defaultProps = {
  btnName: '',
  color: '',
  wide: false,
};

export default Button;
