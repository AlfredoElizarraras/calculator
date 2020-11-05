import Big from 'big.js';
import * as operations from './operationalConstants';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  let numOne = 0;
  let numTwo = 0;

  if (operation !== operations.JOIN) {
    numTwo = numberTwo !== null ? Big(parseFloat(numberTwo)) : 0;
    numOne = numberOne !== null ? Big(parseFloat(numberOne)) : 0;
  }

  switch (operation) {
    case operations.SUM:
      result = numOne.plus(numTwo);
      break;
    case operations.SUBTRACT:
      result = numOne.minus(numTwo);
      break;
    case operations.MULTIPLY:
      result = numOne.times(numTwo);
      break;
    case operations.DIVIDE:
      if (numTwo === 0) {
        result = null;
      } else {
        result = numOne.div(numTwo);
      }
      break;
    case operations.JOIN:
      if ((numberOne === 0 || numberOne === null) && (numberTwo !== operations.DOT)) {
        result = `${numberTwo}`;
      } else if (numberTwo === 0 && numberOne === 0) {
        result = `${numberTwo}`;
      } else {
        result = `${numberOne}${numberTwo}`;
      }
      break;
    case operations.PERCENTAGE:
      result = numOne.times(0.01);
      break;
    default:
      result = null;
      break;
  }

  return result;
};

export default operate;
