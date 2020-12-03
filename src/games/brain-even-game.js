import generateNumber from '../utils.js';
import createGame from '../index.js';

const isEven = (number) => number % 2 === 0;
const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const createBrainEvenGame = () => {
  const num = generateNumber(-100, 100);
  const expression = num.toString();
  const expectedResult = isEven(num) ? 'yes' : 'no';
  return [expression, expectedResult];
};

export default () => createGame(createBrainEvenGame, rulesOfGame);
