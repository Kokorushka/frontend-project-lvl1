import generateNumber from './common-functions.js';

const generateSign = (arr) => arr[generateNumber(2)];
const brainCalcGame = () => {
  const randomNumber1 = generateNumber(100, 0.5);
  const randomNumber2 = generateNumber(100, 0.5);
  const sign = generateSign(['+', '-', '*']);
  let expression;
  let expectedResult;
  if (sign === '+') {
    expression = `${randomNumber1} + ${randomNumber2}`;
    expectedResult = randomNumber1 + randomNumber2;
  } else if (sign === '-') {
    expression = `${randomNumber1} - ${randomNumber2}`;
    expectedResult = randomNumber1 - randomNumber2;
  } else if (sign === '*') {
    expression = `${randomNumber1} * ${randomNumber2}`;
    expectedResult = randomNumber1 * randomNumber2;
  }
  return [expression, expectedResult.toString()];
};

export default brainCalcGame;
