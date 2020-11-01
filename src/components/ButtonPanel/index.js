import React from 'react';
import Button from '../Button';
import './index.css';

const ButtonPanel = () => (
  <div className="buttonPanel flex flex-column">
    <div className="group">
      <Button btnName="AC" color="#dfdfdf" />
      <Button btnName="+/-" color="#dfdfdf" />
      <Button btnName="%" color="#dfdfdf" />
      <Button btnName="÷" />
    </div>
    <div className="group">
      <Button btnName="7" color="#dfdfdf" />
      <Button btnName="8" color="#dfdfdf" />
      <Button btnName="9" color="#dfdfdf" />
      <Button btnName="X" />
    </div>
    <div className="group">
      <Button btnName="4" color="#dfdfdf" />
      <Button btnName="5" color="#dfdfdf" />
      <Button btnName="6" color="#dfdfdf" />
      <Button btnName="-" />
    </div>
    <div className="group">
      <Button btnName="1" color="#dfdfdf" />
      <Button btnName="2" color="#dfdfdf" />
      <Button btnName="3" color="#dfdfdf" />
      <Button btnName="+" />
    </div>
    <div className="group">
      <Button btnName="0" color="#dfdfdf" wide="true" />
      <Button btnName="." color="#dfdfdf" />
      <Button btnName="=" />
    </div>
  </div>
);

export default ButtonPanel;
