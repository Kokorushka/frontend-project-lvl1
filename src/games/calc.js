import generateNumber from '../utils.js';
import createGame from '../index.js';

const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('something was going wrong');
  }
};

const rulesOfGame = 'What is the result of the expression?';
const createBrainCalcGame = () => {
  const number1 = generateNumber(-100, 100);
  const number2 = generateNumber(-100, 100);
  const signs = ['+', '-', '*'];
  const index = generateNumber(0, signs.length - 1);
  const sign = signs[index];
  const expression = `${number1} ${sign} ${number2}`;
  const expectedResult = calculate(number1, number2, sign);
  return [expression, expectedResult.toString()];
};

export default () => createGame(createBrainCalcGame, rulesOfGame);
