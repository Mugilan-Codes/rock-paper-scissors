const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const GAME_MOVES = [ROCK, PAPER, SCISSORS];

console.clear();

const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * GAME_MOVES.length);

  return GAME_MOVES[randomNumber];
};

const playRound = (playerSelection, computerSelection = computerPlay()) => {
  playerSelection = playerSelection.toUpperCase();

  if (!GAME_MOVES.includes(playerSelection)) {
    return `Invalid Move. You Entered ${playerSelection}`;
  }

  if (playerSelection === computerSelection) {
    return 'Same';
  }

  if (
    (playerSelection === SCISSORS && computerSelection === PAPER) ||
    (playerSelection === PAPER && computerSelection === ROCK) ||
    (playerSelection === ROCK && computerSelection === SCISSORS)
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }

  if (
    (computerSelection === SCISSORS && playerSelection === PAPER) ||
    (computerSelection === PAPER && playerSelection === ROCK) ||
    (computerSelection === ROCK && playerSelection === SCISSORS)
  ) {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  return { playerSelection, computerSelection };
};

let playerSelection = 'paPEr';

console.log(playRound(playerSelection));
