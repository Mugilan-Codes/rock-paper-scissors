const scoreBoard__div = document.querySelector('.score');

const playerScoreDisplay__p = scoreBoard__div.querySelector('.player-score p');
const computerScoreDisplay__p = scoreBoard__div.querySelector(
  '.computer-score p'
);

const roundsDisplay__span = document.querySelector('.completed-rounds p span');

const resultDisplayMessage__p = document.querySelector('.result .message');
const completedRoundsDisplay__span = document.querySelector(
  '.result .complete-rounds'
);
const restartGame__button = document.querySelector('.result button');

export const updateScreen = (pScore = 0, cScore = 0, rounds = 0, winScore) => {
  playerScoreDisplay__p.textContent = pScore;
  computerScoreDisplay__p.textContent = cScore;
  roundsDisplay__span.textContent = rounds;

  const winGameMessage = (winner) => {
    resultDisplayMessage__p.textContent = `${winner} wins`;

    completedRoundsDisplay__span.parentElement.classList.remove('hide');
    completedRoundsDisplay__span.textContent = rounds;

    restartGame__button.classList.remove('hide');
  };

  if (pScore === winScore) {
    winGameMessage('User');
    return true;
  }

  if (cScore === winScore) {
    winGameMessage('Computer');
    return true;
  }

  return false;
};
