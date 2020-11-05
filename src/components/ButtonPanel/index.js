/* eslint-disable react/prop-types */
import React from 'react';
import Proptypes from 'prop-types';
import Button from '../Button';
import './index.css';
import { BUTTONS, ZERO, EQUAL } from '../../logic/operationalConstants';

const ButtonPanel = ({ clickHandler }) => {
  const groups = [];
  let row = [];
  let numberOfItems = 0;
  for (let buttonIndex = 0; buttonIndex < BUTTONS.length; buttonIndex += 1) {
    if (numberOfItems === 3 || BUTTONS[buttonIndex] === EQUAL) {
      row.push(
        <Button onClick={clickHandler} btnName={BUTTONS[buttonIndex]} />,
      );
      groups.push(<div className="group">{row}</div>);
      row = [];
      numberOfItems = 0;
    } else {
      const isZero = BUTTONS[buttonIndex] === ZERO;
      if (isZero) {
        row.push(
          <Button
            onClick={clickHandler}
            btnName={BUTTONS[buttonIndex]}
            color="#dfdfdf"
            wide="true"
          />,
        );
      } else {
        row.push(
          <Button
            onClick={clickHandler}
            btnName={BUTTONS[buttonIndex]}
            color="#dfdfdf"
          />,
        );
      }
      numberOfItems += 1;
    }
  }
  return <div className="buttonPanel flex flex-column">{groups}</div>;
};

Button.prototypes = {
  clickHandler: Proptypes.func,
};

export default ButtonPanel;
/* eslint-enable react/prop-types */
