import { getComputerChoice } from '../utils/get-comp-choice';

export const playRound = (
  playerChoice,
  computerChoice = getComputerChoice()
) => {
  console.log({ playerChoice, computerChoice });

  switch (playerChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      console.log('User');
      return 'W';
    case 'sr':
    case 'rp':
    case 'ps':
      console.log('Computer');
      return 'L';
    default:
      console.log('Draw');
      return 'D';
  }
};
