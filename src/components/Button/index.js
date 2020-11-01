import React from 'react';
import Proptypes from 'prop-types';
import './index.css';

const Button = ({ btnName = '' }) => (
  <button type="button">{btnName}</button>
);

Button.prototypes = {
  btnName: Proptypes.string,
};

Button.defaultProps = {
  btnName: '',
};

export default Button;
