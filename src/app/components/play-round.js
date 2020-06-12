import { computerPlay } from './computer';
import { GAME_MOVES, ROCK, PAPER, SCISSORS } from '../utils/types';

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
  if (!GAME_MOVES.includes(playerSelection)) {
    return `Invalid Move. You Entered ${playerSelection}`;
  }

  if (playerSelection === computerSelection) {
    console.log(`It's a Tie! You Both Chose ${playerSelection}`);
    return 'T';
  }

  if (
    (playerSelection === SCISSORS && computerSelection === PAPER) ||
    (playerSelection === PAPER && computerSelection === ROCK) ||
    (playerSelection === ROCK && computerSelection === SCISSORS)
  ) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return 'U';
  }

  console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  return 'C';
};
