import operate from './operate';
import * as operations from './operationalConstants';

const calculate = (calculator, buttonName) => {
  const { total, next, operation } = calculator;
  let returnValue = null;

  if (buttonName === operations.CLEAR) {
    returnValue = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  if (next) {
  }

  return returnValue;
};

export default calculate;
