import { GAME_CHOICES } from '../constants/game-choices';

export const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * GAME_CHOICES.length);

  return GAME_CHOICES[randomNumber];
};
