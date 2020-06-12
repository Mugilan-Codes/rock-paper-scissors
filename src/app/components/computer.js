const computerPlay = () => {
  const randomNumber = Math.floor(Math.random() * GAME_MOVES.length);

  return GAME_MOVES[randomNumber];
};
