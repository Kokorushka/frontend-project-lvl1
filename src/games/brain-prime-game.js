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
const brainPrimeGame = () => {
  const randomNumber = generateNumber(0, 1001);
  const expectedAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};
export default () => createGame(brainPrimeGame, rulesOfGame);
