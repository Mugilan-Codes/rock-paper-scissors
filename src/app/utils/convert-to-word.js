export const convertToWord = (move) => {
  if (move === 'r') return 'Rock';

  if (move === 'p') return 'Paper';

  return 'Scissors';
};
