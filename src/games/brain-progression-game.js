import generateNumber from '../utils.js';
import createGame from '../index.js';

const rulesOfGame = 'What number is missing in the progression?';
const createBrainProgressionGame = () => {
  const initial = generateNumber(0, 31);
  const step = generateNumber(1, 16);
  const lengthProgression = generateNumber(5, 16);
  const indexForChange = generateNumber(0, lengthProgression - 1);
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    const nextProgressionNum = i === indexForChange ? '..' : (initial + i * step).toString();
    progression.push(nextProgressionNum);
  }
  const expectedResult = (initial + (indexForChange * step)).toString();
  return [progression, expectedResult];
};
export default () => createGame(createBrainProgressionGame, rulesOfGame);
