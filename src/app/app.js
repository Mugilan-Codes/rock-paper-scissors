import { playRound } from './components/play-round';
import { updateScreen } from './components/update-screen';

const maxScore__label = document.querySelector('.max-score__input');
const startGame__button = document.querySelector('.info button');
const maxRoundsDisplay__p = document.querySelector('.info .rounds');
const winScoreDisplay__p = document.querySelector('.info .win-score');
const userGameOptions__div = document.querySelector('.choose-options');

export const game = (maxRounds = 5) => {
  maxRounds % 2 === 0 && maxRounds++;

  const winScore = Math.floor(maxRounds / 2) + 1;

  maxScore__label.classList.add('hide');
  startGame__button.classList.add('hide');

  maxRoundsDisplay__p.classList.remove('hide');
  maxRoundsDisplay__p.querySelector('span').textContent = maxRounds;

  winScoreDisplay__p.classList.remove('hide');
  winScoreDisplay__p.querySelector('span').textContent = winScore;

  userGameOptions__div.classList.remove('hide');

  let playerScore = 0,
    computerScore = 0,
    rounds = 0,
    gameOver = false;

  const playGame = (e) => {
    if (gameOver) {
      return;
    }

    const result = playRound(e.target.id);

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

    gameOver = updateScreen(playerScore, computerScore, rounds, winScore);
  };

  userGameOptions__div.querySelectorAll('.btn').forEach((option) => {
    option.addEventListener('click', playGame);
  });
};
