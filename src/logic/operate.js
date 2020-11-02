import Big from 'big.js';
import * as operations from './operationalConstants';

const operate = (numberOne, numberTwo, operation) => {
  if (operation !== operations.JOIN) {
    numberOne = Big(parseFloat(numberOne));
    numberTwo = Big(parseFloat(numberTwo));
  }
  
  switch (operation) {
    case operations.SUM:
      return Big(numberOne + numberTwo);
    case operations.SUBTRACT:
      return Big(numberOne - numberTwo);
    case operations.MULTIPLY:
      return Big(numberOne * numberTwo);
    case operations.DIVIDE:
      if (numberTwo === 0)
       return null;
      else
        Big(numberOne / numberTwo);
    case operations.JOIN:
      return `${numberOne}${numberTwo}`;
  }

};

export default operate;