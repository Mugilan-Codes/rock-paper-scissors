import { getComputerChoice } from '../utils/get-comp-choice';
import { convertToWord } from '../utils/convert-to-word';

import r from '../../assests/rock.png';
import p from '../../assests/paper.png';
import s from '../../assests/scissors.png';

const playerChoice__img = document.querySelector(
  '#play-game .chosen-option .player-choice img'
);

const computerChoice__img = document.querySelector(
  '#play-game .chosen-option .computer-choice img'
);

const resultDisplayMessage__p = document.querySelector(
  '#play-game .play-round p'
);

export const playRound = (
  playerChoice,
  computerChoice = getComputerChoice()
) => {
  console.log(convertToWord(playerChoice), convertToWord(computerChoice));

  const pImg = playerChoice === 'r' ? r : playerChoice === 'p' ? p : s;
  playerChoice__img.src = pImg;

  const cImg = computerChoice === 'r' ? r : computerChoice === 'p' ? p : s;
  computerChoice__img.src = cImg;

  switch (playerChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      resultDisplayMessage__p.textContent = `You Win!, ${convertToWord(
        playerChoice
      )} beats ${convertToWord(computerChoice)}`;
      return 'W';
    case 'rp':
    case 'ps':
    case 'sr':
      resultDisplayMessage__p.textContent = `You Lose!, ${convertToWord(
        playerChoice
      )} loses to ${convertToWord(computerChoice)}`;
      return 'L';
    default:
      resultDisplayMessage__p.textContent = `Draw!, You both picked ${convertToWord(
        playerChoice
      )}`;
      return 'D';
  }
};
