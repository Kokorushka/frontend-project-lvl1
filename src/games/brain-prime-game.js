import generateNumber from './common-functions.js';

const isPrime = (number) => {
  const halfNumber = Math.ceil(number / 2);
  if (number === 1) {
    return true;
  }
  if (number <= 0) {
    return false;
  }
  for (let i = 2; i <= halfNumber; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrimeGame = () => {
  const randomNumber = generateNumber(1000);
  let expectedAnswer;
  if (isPrime(randomNumber)) {
    expectedAnswer = 'yes';
  } else {
    expectedAnswer = 'no';
  }
  return [randomNumber, expectedAnswer];
};
export default brainPrimeGame;
