const maxScore__label = document.querySelector('.max-score__input');
const startGame__button = document.querySelector('.info button');
const maxRoundsDisplay__p = document.querySelector('.info .rounds');
const winScoreDisplay__p = document.querySelector('.info .win-score');

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
};
