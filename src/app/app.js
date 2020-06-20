import { playRound } from './components/play-round';
import { updateScreen } from './components/update-screen';

const playGame__section = document.getElementById('play-game');

const playingMode__div = playGame__section.querySelector('.playing');
const showGameLimit__span = playingMode__div.querySelector(
  'h2 .show-game-limit'
);
const showWinnigScore__span = playingMode__div.querySelector(
  'p .show-winning-score'
);

const playerChoicesParent__div = document.querySelector('#play-game .choices');
const playerChoices__div = playerChoicesParent__div.querySelectorAll('div');

const scoreBoard__div = document.querySelector('#play-game .score-board');
const playerScore__p = scoreBoard__div.querySelector('.player-score p');
const computerScore__p = scoreBoard__div.querySelector('.computer-score p');

const displayCompletedRounds__div = document.querySelector(
  '#play-game .round-number'
);
const displayCompletedRounds__span = displayCompletedRounds__div.querySelector(
  'p span'
);

const playRoundMessage__div = document.querySelector('#play-game .play-round');
const displayRoundResult__p = playRoundMessage__div.querySelector('p');

const chosenOptions__div = document.querySelector('#play-game .chosen-option');

const finalResult__div = document.querySelector('#play-game .final-result');
const finalResult__span = finalResult__div.querySelector('h3 span');
const finalRoundsDisplay__span = finalResult__div.querySelector('p span');

const gameOverScreen = (result, roundsToComplete) => {
  playerChoicesParent__div.classList.add('hide');
  playingMode__div.classList.add('hide');
  playRoundMessage__div.classList.add('hide');
  chosenOptions__div.classList.add('hide');
  displayCompletedRounds__div.classList.add('hide');

  finalResult__div.classList.remove('hide');

  finalResult__span.textContent = result;
  finalRoundsDisplay__span.textContent = roundsToComplete;
};

let winScore;

export const startGame = (gameLength = 5) => {
  if (gameLength < 1) gameLength = 5;

  playGame__section.classList.remove('hide');

  showGameLimit__span.textContent = gameLength;

  winScore = Math.floor(gameLength / 2) + 1;
  showWinnigScore__span.textContent = winScore;
};

let roundResult,
  playerScore = 0,
  computerScore = 0,
  rounds = 0,
  gameWinner,
  gameOver = false;

playerChoices__div.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    const check = playRound(e.target.id);

    console.log({ check });

    if (check === 'W') {
      playerScore++;
      roundResult = 'You Win!';
    } else if (check === 'L') {
      computerScore++;
      roundResult = 'You Lose!';
    } else {
      roundResult = 'Draw';
    }

    rounds++;
    displayCompletedRounds__span.textContent = rounds;
    playerScore__p.textContent = playerScore;
    computerScore__p.textContent = computerScore;

    if (playerScore === winScore) {
      gameWinner = 'WIN';
      gameOver = true;
    }
    if (computerScore === winScore) {
      gameWinner = 'LOSE';
      gameOver = true;
    }

    updateScreen(roundResult);

    if (gameOver) gameOverScreen(gameWinner, rounds);
  });
});
