import readlineSync from '../node_modules/readline-sync/lib/readline-sync.js';

// const getAndPrintName = () => {
//   console.log('Welcome to the Brain Games!');
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);
// };
const greeting = () => console.log('Welcome to the Brain Games!');
const getName = () => readlineSync.question('May I have your name? ');
const greetingWithName = (userName) => console.log(`Hello, ${userName}!`);

export { greeting, getName, greetingWithName };
