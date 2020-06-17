const GAME_MOVES = ['r', 'p', 's'];

export const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * GAME_MOVES.length);

  return GAME_MOVES[randomNumber];
};
