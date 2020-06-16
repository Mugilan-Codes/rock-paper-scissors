import { computerPlay } from '../utils/get-comp-choice';
import { ROCK, PAPER, SCISSORS } from '../constants/types';

export const playRound = (
  playerSelection,
  computerSelection = computerPlay()
) => {
  playerSelection = playerSelection.toUpperCase();
  switch (playerSelection) {
    case 'R':
      playerSelection = ROCK;
      break;
    case 'P':
      playerSelection = PAPER;
      break;
    case 'S':
      playerSelection = SCISSORS;
      break;
    default:
      playerSelection = playerSelection;
  }
  console.log({ playerSelection, computerSelection });
};
