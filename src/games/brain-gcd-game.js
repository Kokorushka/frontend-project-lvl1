import generateNumber from '../utils.js';
import createGame from '../index.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';
const brainGcdGame = () => {
  const randomNumber1 = generateNumber(1, 100);
  const randomNumber2 = generateNumber(1, 100);
  const expression = `${randomNumber1} ${randomNumber2}`;
  let greatCommonDelimeter;
  for (let i = 1; i <= randomNumber1; i += 1) {
    if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
      greatCommonDelimeter = i;
    }
  }
  return [expression, greatCommonDelimeter.toString()];
};
export default () => createGame(brainGcdGame, rulesOfGame);
