/* eslint-disable react/prop-types */
import React from 'react';
import Proptypes from 'prop-types';
import Button from '../Button';
import './index.css';

const ButtonPanel = ({ clickHandler }) => (
  <div className="buttonPanel flex flex-column">
    <div className="group">
      <Button onClick={clickHandler} btnName="AC" color="#dfdfdf" />
      <Button onClick={clickHandler} btnName="+/-" color="#dfdfdf" />
      <Button onClick={clickHandler} btnName="%" color="#dfdfdf" />
      <Button onClick={clickHandler} btnName="÷" />
    </div>
    <div className="group">
      <Button onClick={clickHandler} btnName="7" color="#dfdfdf" />
      <Button onClick={clickHandler} btnName="8" color="#dfdfdf" />
      <Button onClick={clickHandler} btnName="9" color="#dfdfdf" />
      <Button onClick={clickHandler} btnName="X" />
    </div>
    <div className="group">
      <Button onClick={clickHandler} btnName="4" color="#dfdfdf" />
      <Button onClick={clickHandler} btnName="5" color="#dfdfdf" />
      <Button onClick={clickHandler} btnName="6" color="#dfdfdf" />
      <Button onClick={clickHandler} btnName="-" />
    </div>
    <div className="group">
      <Button onClick={clickHandler} btnName="1" color="#dfdfdf" />
      <Button onClick={clickHandler} btnName="2" color="#dfdfdf" />
      <Button onClick={clickHandler} btnName="3" color="#dfdfdf" />
      <Button onClick={clickHandler} btnName="+" />
    </div>
    <div className="group">
      <Button onClick={clickHandler} btnName="0" color="#dfdfdf" wide="true" />
      <Button onClick={clickHandler} btnName="." color="#dfdfdf" />
      <Button onClick={clickHandler} btnName="=" />
    </div>
  </div>
);

Button.prototypes = {
  clickHandler: Proptypes.func,
};

export default ButtonPanel;
/* eslint-enable react/prop-types */
