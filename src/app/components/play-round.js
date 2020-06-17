import { getComputerChoice } from '../utils/get-comp-choice';

import r from '../../assests/rock.png';
import p from '../../assests/paper.png';
import s from '../../assests/scissors.png';

const playerChoice__img = document.querySelector(
  '.display-options .player-choice img'
);
const computerChoice__img = document.querySelector(
  '.display-options .computer-choice img'
);

export const playRound = (
  playerChoice,
  computerChoice = getComputerChoice()
) => {
  console.log({ playerChoice, computerChoice });

  const pImg = playerChoice === 'r' ? r : playerChoice === 'p' ? p : s;
  playerChoice__img.src = pImg;

  const cImg = computerChoice === 'r' ? r : computerChoice === 'p' ? p : s;
  computerChoice__img.src = cImg;

  switch (playerChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      console.log('User');
      return 'W';
    case 'sr':
    case 'rp':
    case 'ps':
      console.log('Computer');
      return 'L';
    default:
      console.log('Draw');
      return 'D';
  }
};
