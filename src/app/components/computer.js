import { GAME_MOVES } from '../utils/types';

export const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * GAME_MOVES.length);

  return GAME_MOVES[randomNumber];
};
