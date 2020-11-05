/* eslint-disable react/prop-types */
import React from 'react';
import Proptypes from 'prop-types';
import './index.css';

const Button = ({
  btnName = '', color = '', wide = '', onClick,
}) => {
  const cssClass = `btn btn-bg-color ${wide ? 'w-50' : 'w-25'}`;
  return (
    <button
      onClick={() => {
        onClick(btnName);
      }}
      type="button"
      className={cssClass}
      style={{ backgroundColor: color }}
    >
      {btnName}
    </button>
  );
};

Button.prototypes = {
  btnName: Proptypes.string,
  color: Proptypes.string,
  wide: Proptypes.bool,
  onClick: Proptypes.func,
};

Button.defaultProps = {
  btnName: '',
  color: '',
  wide: false,
};

export default Button;
/* eslint-enable react/prop-types */
