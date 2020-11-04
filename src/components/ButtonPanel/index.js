/* eslint-disable react/prop-types */
import React from 'react';
import Proptypes from 'prop-types';
import Button from '../Button';
import './index.css';
import * as operations from '../../logic/operationalConstants';

const ButtonPanel = ({ clickHandler }) => (
  <div className="buttonPanel flex flex-column">
    <div className="group">
      <Button onClick={clickHandler} btnName={operations.CLEAR} color="#dfdfdf" />
      <Button onClick={clickHandler} btnName={operations.PLUS_NEGATIVE} color="#dfdfdf" />
      <Button onClick={clickHandler} btnName={operations.PERCENTAGE} color="#dfdfdf" />
      <Button onClick={clickHandler} btnName={operations.DIVIDE} />
    </div>
    <div className="group">
      <Button onClick={clickHandler} btnName={operations.SEVEN} color="#dfdfdf" />
      <Button onClick={clickHandler} btnName={operations.EIGHT} color="#dfdfdf" />
      <Button onClick={clickHandler} btnName={operations.NINE} color="#dfdfdf" />
      <Button onClick={clickHandler} btnName={operations.MULTIPLY} />
    </div>
    <div className="group">
      <Button onClick={clickHandler} btnName={operations.FOUR} color="#dfdfdf" />
      <Button onClick={clickHandler} btnName={operations.FIVE} color="#dfdfdf" />
      <Button onClick={clickHandler} btnName={operations.SIX} color="#dfdfdf" />
      <Button onClick={clickHandler} btnName={operations.SUBTRACT} />
    </div>
    <div className="group">
      <Button onClick={clickHandler} btnName={operations.ONE} color="#dfdfdf" />
      <Button onClick={clickHandler} btnName={operations.TWO} color="#dfdfdf" />
      <Button onClick={clickHandler} btnName={operations.THREE} color="#dfdfdf" />
      <Button onClick={clickHandler} btnName={operations.SUM} />
    </div>
    <div className="group">
      <Button onClick={clickHandler} btnName={operations.ZERO} color="#dfdfdf" wide="true" />
      <Button onClick={clickHandler} btnName={operations.DOT} color="#dfdfdf" />
      <Button onClick={clickHandler} btnName={operations.EQUAL} />
    </div>
  </div>
);

Button.prototypes = {
  clickHandler: Proptypes.func,
};

export default ButtonPanel;
/* eslint-enable react/prop-types */
