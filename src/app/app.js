const game = (maxRounds = 5) => {
  if (maxRounds < 0) maxRounds = 5;
  if (maxRounds % 2 === 0) maxRounds += 1;

  let playerSelection;
  round = 0;
  playerScore = 0;
  computerScore = 0;
  realRounds = 0;
  winner = '';
  let winningScore = Math.floor(maxRounds / 2) + 1;

  console.log({ maxRounds, winningScore });

  while (round < maxRounds) {
    if (playerScore === winningScore || computerScore === winningScore) break;

    playerSelection = prompt(
      'Choose One of the Three \nRock - r\nPaper - p\nScissors - s'
    );

    const roundResult = playRound(playerSelection);

    switch (roundResult) {
      case 'T':
        realRounds++;
        console.log({ round, playerScore, computerScore, realRounds });
        continue;
      case 'U':
        realRounds++;
        playerScore++;
        round++;
        console.log({ round, playerScore, computerScore, realRounds });
        break;
      case 'C':
        realRounds++;
        computerScore++;
        round++;
        console.log({ round, playerScore, computerScore, realRounds });
        break;
      default:
        console.log('Choose one of the options');
    }
  }

  winner = playerScore === winningScore ? PLAYER : COMPUTER;

  console.log(
    `The Winner is ${winner} and it took ${realRounds} overall rounds to get a result`
  );
};
