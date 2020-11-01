import React from 'react';
import Proptypes from 'prop-types';
import './index.css';

const Button = ({ buttonName }) = (
  <button>
    {buttonName}
  </button>
);


Button.prototypes = {
  buttonName: Proptypes.string,
};

export default Button;