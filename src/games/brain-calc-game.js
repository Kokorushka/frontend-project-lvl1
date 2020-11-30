import generateNumber from '../utils.js';
import createGame from '../index.js';

const rulesOfGame = 'What is the result of the expression?';
const generateSign = (arr) => arr[generateNumber(2)];
const brainCalcGame = () => {
  const randomNumber1 = generateNumber(-100, 101);
  const randomNumber2 = generateNumber(-100, 101);
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
  return [expression, expectedResult.toString(), rulesOfGame];
};

export default () => createGame(brainCalcGame, rulesOfGame);
