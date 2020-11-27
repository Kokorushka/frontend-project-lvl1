import generateNumber from './common-functions.js';

const brainGcdGame = () => {
  const randomNumber1 = generateNumber(50, -1);
  const randomNumber2 = generateNumber(50, -1);
  const expression = `${randomNumber1} ${randomNumber2}`;
  let greatCommonDelimeter;
  for (let i = 1; i <= randomNumber1; i += 1) {
    if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
      greatCommonDelimeter = i;
    }
  }
  return [expression, greatCommonDelimeter.toString()];
};
export default brainGcdGame;
