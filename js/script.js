const { ROCK, SCISSORS, PAPER } = require('./constants');

const GAME_MOVES = [ROCK, PAPER, SCISSORS];

console.clear();

const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * GAME_MOVES.length);

  return GAME_MOVES[randomNumber];
};

const declareRoundWinner = (p1Move, p2Move) => {
  if (p1Move === p2Move) {
    return 0;
  }

  if (
    (p1Move === SCISSORS && p2Move === PAPER) ||
    (p1Move === PAPER && p2Move === ROCK) ||
    (p1Move === ROCK && p2Move === SCISSORS)
  ) {
    return 1;
  }

  return 2;
};

const playRound = (playerSelection, computerSelection = computerPlay()) => {
  if (!GAME_MOVES.includes(playerSelection)) {
    return `Invalid Move. You Entered ${playerSelection}`;
  }

  const roundWinner = declareRoundWinner(playerSelection, computerSelection);

  let roundWinnerMessage;

  switch (roundWinner) {
    case 0:
      roundWinnerMessage = `It's a Tie! You Both Chose ${playerSelection}`;
      break;
    case 1:
      roundWinnerMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
      break;
    case 2:
      roundWinnerMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
      break;
    default:
      roundWinnerMessage = 'Somethinng bad happened';
  }

  return roundWinnerMessage;
};

const game = (maxRounds = 5) => {
  if (maxRounds < 0) maxRounds = 5;
  if (maxRounds % 2 === 0) maxRounds += 1;

  let playerSelection;
  let round = 0;
  let playerScore = 0;
  let computerScore = 0;
  let winningScore = Math.floor(maxRounds / 2) + 1;

  console.log({ maxRounds, winningScore });

  while (round < maxRounds) {
    if (playerScore === winningScore || computerScore === winningScore) break;

    playerSelection = prompt(
      'Choose One of the Three \nRock - r\nPaper - p\nScissors - s'
    );

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
      console.log(`Invalid Move. You Entered ${playerSelection}`);
      continue;
    }

    console.log(playRound(playerSelection));
  }
};
