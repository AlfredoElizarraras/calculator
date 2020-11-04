import Big from 'big.js';
import * as operations from './operationalConstants';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;

  switch (operation) {
    case operations.SUM:
      result = Big(parseFloat(numberOne) + parseFloat(numberTwo));
      break;
    case operations.SUBTRACT:
      result = Big(parseFloat(numberOne) - parseFloat(numberTwo));
      break;
    case operations.MULTIPLY:
      result = Big(parseFloat(numberOne) * parseFloat(numberTwo));
      break;
    case operations.DIVIDE:
      if (parseFloat(numberTwo) === 0) {
        result = null;
      } else {
        result = Big(parseFloat(numberOne) / parseFloat(numberTwo));
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
      result = Big(parseFloat(numberOne) * 0.01);
      break;
    default:
      result = null;
      break;
  }

  return result;
};

export default operate;
