import Big from 'big.js';
import * as operations from './operationalConstants';

const operate = (numberOne, numberTwo, operation) => {
  let numOne;
  let numTwo;
  let result;

  if (operation !== operations.JOIN) {
    numOne = Big(parseFloat(numberOne));
    numTwo = Big(parseFloat(numberTwo));
  }

  switch (operation) {
    case operations.SUM:
      result = Big(numOne + numberTwo);
      break;
    case operations.SUBTRACT:
      result = Big(numOne - numTwo);
      break;
    case operations.MULTIPLY:
      result = Big(numOne * numTwo);
      break;
    case operations.DIVIDE:
      if (numTwo === 0) {
        result = null;
      } else {
        result = Big(numOne / numTwo);
      }
      break;
    case operations.JOIN:
      result = `${numOne}${numTwo}`;
      break;
    default:
      result = null;
      break;
  }

  return result;
};

export default operate;
