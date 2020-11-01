import React from 'react';
import Proptypes from 'prop-types';
import './index.css';

const Display = ({ operationResult = '0' }) => (
  <div>{operationResult}</div>
);

Display.prototypes = {
  operationResult: Proptypes.string,
};

Display.defaultProps = {
  operationResult: '0',
};

export default Display;
