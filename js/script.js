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

// const game = (maxRounds = 5) => {
//   if (maxRounds < 0) maxRounds = 5;
//   if (maxRounds % 2 === 0) maxRounds += 1;

//   let playerSelection;
//   let round = 0;
//   let playerScore = 0;
//   let computerScore = 0;
//   let winningScore = Math.floor(maxRounds / 2) + 1;

//   console.log({ maxRounds, winningScore });

//   while (round < maxRounds) {
//     if (playerScore === winningScore || computerScore === winningScore) break;

//     playerSelection = prompt(
//       'Choose One of the Three \nRock - r\nPaper - p\nScissors - s'
//     );

//     playerSelection = playerSelection.toUpperCase();

//     switch (playerSelection) {
//       case 'R':
//         playerSelection = ROCK;
//         break;
//       case 'P':
//         playerSelection = PAPER;
//         break;
//       case 'S':
//         playerSelection = SCISSORS;
//         break;
//       default:
//         playerSelection = playerSelection;
//     }

//     if (!GAME_MOVES.includes(playerSelection)) {
//       console.log(`Invalid Move. You Entered ${playerSelection}`);
//       continue;
//     }

//     console.log(playRound(playerSelection));
//   }
// };
