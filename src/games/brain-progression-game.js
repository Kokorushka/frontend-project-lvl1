import generateNumber from './common-functions.js';

const brainProgressionGame = () => {
  const randomStartNumber = generateNumber(20);
  const randomStepNumber = generateNumber(15) + 1; // +1 - чтобы шаг не равнялся нулю
  const randomlengthProgression = generateNumber(10) + 5;
  // +5 - чтобы длина прогрессии была не менее 5 элементов
  const randomIndexForChange = generateNumber(randomlengthProgression - 1);
  // -1 - чтобы индекс не превышал длину массива
  let sourceProgression = [];
  for (let i = 0; i < randomlengthProgression; i += 1) {
    const newNumberInProgression = (randomStartNumber + (i * randomStepNumber)).toString();
    sourceProgression = [...sourceProgression, newNumberInProgression];
  }
  const newProgresion = [...sourceProgression.slice(0, randomIndexForChange), '..', ...sourceProgression.slice(randomIndexForChange + 1)];
  return [newProgresion, sourceProgression[randomIndexForChange]];
};
export default brainProgressionGame;
