export const getResult = (userChoice, compChoice) => {
  if (userChoice === compChoice) {
    return draw(userChoice, compChoice);
  }
};

const draw = () => {
  console.log('DRAW');
  return 'D';
};

const lose = () => {
  console.log('LOSE');
  return 'C';
};

const win = () => {
  console.log('WIN');
  return 'U';
};
