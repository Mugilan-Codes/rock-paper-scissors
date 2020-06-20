import { GAME_MOVES } from './game-moves';

export const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * GAME_MOVES.length);

  return GAME_MOVES[randomNumber];
};
