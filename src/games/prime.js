import generateNumber from '../utils.js';
import createGame from '../index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  const halfNumber = Math.ceil(number / 2);
  for (let i = 2; i <= halfNumber; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const creteBrainPrimeGame = () => {
  const num = generateNumber(0, 1001);
  const expectedAnswer = isPrime(num) ? 'yes' : 'no';
  return [num, expectedAnswer];
};
export default () => createGame(creteBrainPrimeGame, rulesOfGame);
