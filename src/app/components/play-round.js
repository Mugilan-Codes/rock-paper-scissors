import { computerPlay } from '../utils/get-comp-choice';
import { ROCK, PAPER, SCISSORS } from '../constants/types';
import { getResult } from '../utils/get-result';

const computerChoices__div = document.querySelectorAll(
  '.comp-game-choices .choice'
);

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

  computerChoices__div.forEach((choice) => {
    if (choice.id === computerSelection) {
      console.log(choice);
      choice.classList.add('selection');
    }
  });

  const winner = getResult(playerSelection, computerSelection);
  console.log({ winner });
};
