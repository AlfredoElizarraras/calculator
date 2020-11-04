import operate from './operate';
import * as operations from './operationalConstants';

const calculate = (calculator, buttonName) => {
  const { total, next, operation } = calculator;
  let returnValue = {
    total,
    next: null,
    operation: null,
  };

  const resetCalculator = () => {
    returnValue = {
      total: 0,
      next: null,
      operation: null,
    };
  };

  const assignSameValues = () => {
    returnValue = {
      total,
      next,
      operation,
    };
  };

  if (buttonName === operations.CLEAR) {
    resetCalculator();
  } else if (Number.isNaN(+buttonName)) {
    switch (buttonName) {
      case operations.EQUAL:
        if (total && next && operation) {
          returnValue = {
            total: operate(total, next, operation),
            next: null,
            operation: null,
          };
        } else {
          assignSameValues();
        }
        break;
      case operations.PERCENTAGE:
        if (next) {
          returnValue = {
            total,
            next: operate(next, '0.01', operations.MULTIPLY),
            operation,
          };
        } else if (total) {
          returnValue = {
            total: operate(total, '0.01', operations.MULTIPLY),
            next,
            operation,
          };
        } else {
          assignSameValues();
        }
        break;
      case operations.PLUS_NEGATIVE:
        if (next) {
          returnValue = {
            total,
            next: operate(next, '-1', operations.MULTIPLY),
            operation,
          };
        } else if (total) {
          returnValue = {
            total: operate(total, '-1', operations.MULTIPLY),
            next,
            operation,
          };
        } else {
          assignSameValues();
        }
        break;
      case operations.DOT:
        if (next) {
          returnValue = {
            total,
            next: operate(next, operations.DOT, operations.JOIN),
            operation,
          };
        } else if (total) {
          returnValue = {
            total: operate(total, operations.DOT, operations.JOIN),
            next,
            operation,
          };
        }
        break;
      default:
        if (buttonName === operations.SUM
           || buttonName === operations.SUBTRACT
           || buttonName === operations.MULTIPLY
           || buttonName === operations.DIVIDE) {
          if (!next) {
            returnValue = {
              total,
              next,
              operation: buttonName,
            };
          } else if (next && operation) {
            returnValue = {
              total: operate(total, next, operation),
              next: null,
              operation: buttonName,
            };
          }
        }
        break;
    }
  } else if (!Number.isNaN(+buttonName)) {
    if (next) {
      returnValue = {
        total,
        next: operate(next, buttonName, operations.JOIN),
        operation,
      };
    } else if (total) {
      returnValue = {
        total: operate(total, buttonName, operations.JOIN),
      };
    }
  }

  return returnValue;
};

export default calculate;
