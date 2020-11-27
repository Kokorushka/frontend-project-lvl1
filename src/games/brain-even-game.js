import generateNumber from './common-functions.js';

const isEven = (number) => number % 2 === 0;

const brainEvenGame = () => {
  const randomNumber = generateNumber(200, 0.5);
  const expression = randomNumber.toString();
  let expectedResult;
  if (isEven(randomNumber)) {
    expectedResult = 'yes';
  } else if (!isEven(randomNumber)) {
    expectedResult = 'no';
  }
  return [expression, expectedResult];
};

export default brainEvenGame;
