const playGame__section = document.getElementById('play-game');

const playerChoicesParent__div = playGame__section.querySelector('.choices');
const playingMode__div = playGame__section.querySelector('.playing');
const playRoundMessage__div = playGame__section.querySelector('.play-round');
const chosenOptions__div = playGame__section.querySelector('.chosen-option');
const displayCompletedRounds__div = playGame__section.querySelector(
  '.round-number'
);
const finalResult__div = playGame__section.querySelector('.final-result');
const finalResult__span = finalResult__div.querySelector('h3 span');
const finalRoundsDisplay__span = finalResult__div.querySelector('p span');

export const updateScreen = (result, roundsToComplete) => {
  playerChoicesParent__div.classList.add('hide');
  playingMode__div.classList.add('hide');
  playRoundMessage__div.classList.add('hide');
  chosenOptions__div.classList.add('hide');
  displayCompletedRounds__div.classList.add('hide');

  finalResult__div.classList.remove('hide');

  finalResult__span.textContent = result;
  finalRoundsDisplay__span.textContent = roundsToComplete;
};
