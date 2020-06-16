import { GAME_CHOICES } from './constants/game-choices';
import { playRound } from './components/play-round';

const choiceInputs__div = document.querySelectorAll(
  '.user-game-choices .choice'
);

export const game = (maxRounds = 5) => {
  // console.log(maxRounds);
  // console.log(GAME_CHOICES);
  // console.log(GAME_CHOICES.length);

  choiceInputs__div.forEach((choice) =>
    choice.addEventListener('click', (e) => {
      e.currentTarget.classList.add('selection');
      playRound(e.currentTarget.id);
    })
  );
};
