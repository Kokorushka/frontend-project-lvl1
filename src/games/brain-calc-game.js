import generateNumber from '../utils.js';
import createGame from '../index.js';

const getExpetedResult = (num1, num2, sign) => {
  let expectedResult;
  switch (sign) {
    case '+':
      expectedResult = num1 + num2;
      break;
    case '-':
      expectedResult = num1 - num2;
      break;
    case '*':
      expectedResult = num1 * num2;
      break;
    default:
      console.log('this is a wrong sign');
      break;
  }
  return expectedResult;
};

const rulesOfGame = 'What is the result of the expression?';
const createBrainCalcGame = () => {
  const randomNumber1 = generateNumber(-100, 101);
  const randomNumber2 = generateNumber(-100, 101);
  const randomIndex = generateNumber(0, 3);
  const arrOfSigns = ['+', '-', '*'];
  const sign = arrOfSigns[randomIndex];
  const expression = `${randomNumber1} ${sign} ${randomNumber2}`;
  const expectedResult = getExpetedResult(randomNumber1, randomNumber2, sign);
  return [expression, expectedResult.toString()];
};

export default () => createGame(createBrainCalcGame, rulesOfGame);
