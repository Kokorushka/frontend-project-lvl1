import generateNumber from '../utils.js';
import createGame from '../index.js';

const isEven = (number) => number % 2 === 0;
const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainEvenGame = () => {
  const randomNumber = generateNumber(-100, 100);
  const expression = randomNumber.toString();
  let expectedResult;
  if (isEven(randomNumber)) {
    expectedResult = 'yes';
  } else if (!isEven(randomNumber)) {
    expectedResult = 'no';
  }
  return [expression, expectedResult];
};

export default () => createGame(brainEvenGame, rulesOfGame);
