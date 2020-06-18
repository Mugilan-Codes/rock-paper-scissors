import { playRound } from './components/play-round';

const maxScore__label = document.querySelector('.max-score__input');
const startGame__button = document.querySelector('.info button');
const maxRoundsDisplay__p = document.querySelector('.info .rounds');
const winScoreDisplay__p = document.querySelector('.info .win-score');
const userGameOptions__div = document.querySelector('.choose-options');
const playerScoreDisplay__p = document.querySelector('.score .player-score p');
const computerScoreDisplay__p = document.querySelector(
  '.score .computer-score p'
);
const roundsDisplay__span = document.querySelector('.completed-rounds p span');
const resultDisplayMessage__p = document.querySelector('.result .message');
const completedRoundsDisplay__span = document.querySelector(
  '.result .complete-rounds'
);
const restartGame__button = document.querySelector('.result button');

export const game = (maxRounds = 5) => {
  maxRounds % 2 === 0 && maxRounds++;

  const winScore = Math.floor(maxRounds / 2) + 1;

  console.log({ maxRounds, winScore });

  maxScore__label.classList.add('hide');
  startGame__button.classList.add('hide');

  maxRoundsDisplay__p.classList.remove('hide');
  maxRoundsDisplay__p.querySelector('span').textContent = maxRounds;

  winScoreDisplay__p.classList.remove('hide');
  winScoreDisplay__p.querySelector('span').textContent = winScore;

  userGameOptions__div.classList.remove('hide');

  let playerScore = 0,
    computerScore = 0,
    rounds = 0;

  userGameOptions__div.querySelectorAll('.btn').forEach((option) => {
    option.addEventListener('click', ({ target: { id } }) => {
      if (computerScore !== winScore && playerScore !== winScore) {
        const result = playRound(id);

        console.log({ result });

        switch (result) {
          case 'W':
            rounds++;
            playerScore++;
            break;
          case 'L':
            rounds++;
            computerScore++;
            break;
          case 'D':
            rounds++;
            break;
        }

        console.log({ rounds, playerScore, computerScore });

        roundsDisplay__span.textContent = rounds;
        playerScoreDisplay__p.textContent = playerScore;
        computerScoreDisplay__p.textContent = computerScore;
      }
    });
  });
  if (computerScore === winScore) {
    resultDisplayMessage__p.textContent = 'Computer Wins';

    completedRoundsDisplay__span.parentElement.classList.remove('hide');
    completedRoundsDisplay__span.textContent = rounds;

    restartGame__button.classList.remove('hide');
  }
  if (playerScore === winScore) {
    resultDisplayMessage__p.textContent = 'User Wins';

    completedRoundsDisplay__span.parentElement.classList.remove('hide');
    completedRoundsDisplay__span.textContent = rounds;

    restartGame__button.classList.remove('hide');
  }
};
