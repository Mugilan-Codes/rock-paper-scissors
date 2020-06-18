const scoreBoard__div = document.querySelector('.score');

const playerScoreDisplay__p = scoreBoard__div.querySelector('.player-score p');
const computerScoreDisplay__p = scoreBoard__div.querySelector(
  '.computer-score p'
);

const roundsDisplay__span = document.querySelector('.completed-rounds p span');

export const updateScreen = (pScore = 0, cScore = 0, rounds = 0) => {
  playerScoreDisplay__p.textContent = pScore;
  computerScoreDisplay__p.textContent = cScore;
  roundsDisplay__span.textContent = rounds;
};
