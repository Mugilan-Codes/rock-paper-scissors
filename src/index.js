import { game } from './app/app';
import './main.scss';

const maxRounds__input = document.querySelector('.info input');
const startGame__button = document.querySelector('.info button');

startGame__button.addEventListener('click', () => {
  const maxRounds = maxRounds__input.value;

  maxRounds < 0 ? game() : game(maxRounds);
});
