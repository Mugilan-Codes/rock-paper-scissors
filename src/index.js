import { startGame } from './app/app';
import './main.scss';

const startGame__section = document.getElementById('start-game');
const startGameButton__div = startGame__section.querySelector('div');
const gameLength__input = startGame__section.querySelector('input');

const game = () => {
  const gameLength = gameLength__input.value;

  startGame__section.classList.add('hide');

  startGame(gameLength);
};

startGameButton__div.addEventListener('click', game);
