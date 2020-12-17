import generateNumber from '../utils.js';
import createGame from '../index.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';
const getGreatCommonDelimeter = (num1, num2) => {
  let gcd;
  for (let i = 1; i <= num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};
const createBrainGcdGame = () => {
  const num1 = generateNumber(1, 100);
  const num2 = generateNumber(1, 100);
  const expression = `${num1} ${num2}`;
  const greatCommonDelimeter = getGreatCommonDelimeter(num1, num2);
  return [expression, greatCommonDelimeter.toString()];
};
export default () => createGame(createBrainGcdGame, rulesOfGame);
