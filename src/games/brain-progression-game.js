import generateNumber from '../utils.js';
import createGame from '../index.js';

const rulesOfGame = 'What number is missing in the progression?';
const createBrainProgressionGame = () => {
  const randomStartNumber = generateNumber(0, 31);
  const randomStepNumber = generateNumber(1, 16);
  const randomlengthProgression = generateNumber(5, 16);
  const randomIndexForChange = generateNumber(0, randomlengthProgression);
  let sourceProgression = [];
  for (let i = 0; i < randomlengthProgression; i += 1) {
    const newNumberInProgression = (randomStartNumber + (i * randomStepNumber)).toString();
    sourceProgression = [...sourceProgression, newNumberInProgression];
  }
  const newProgresion = [...sourceProgression.slice(0, randomIndexForChange), '..', ...sourceProgression.slice(randomIndexForChange + 1)];
  return [newProgresion, sourceProgression[randomIndexForChange]];
};
export default () => createGame(createBrainProgressionGame, rulesOfGame);
