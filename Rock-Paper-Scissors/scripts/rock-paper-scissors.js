let score = JSON.parse(localStorage.getItem('score')) || {wins: 0, loses: 0, draws: 0}; //sets the score to the preserved score in the local storage or to the default value

      const scoreBoard = document.querySelector('.score-board');
      const whoWins = document.querySelector('.who-wins');
      const playerComputer = document.querySelector('.player-computer');
      
      showScore();

      function computersMove()//Chooses a random move for the computer
      {
        //chooses a random number between 0 and 0.9
        let num = Math.random();
        let computer = '';

        if (num <= 1/3)//picks the computers move based on the random number above
        {
          computer = 'Rock';
        }
        else if(num <= 2/3)
        {
          computer = 'Paper';
        }
        else if(num <= 1)
        {
          computer = 'Scissors';
        }

        return computer;
      }

      function findWinner(person, computer)//Compares the person and computer and finds who wins
      {
        let result ='';

        if (person == computer)
        {
          score.draws++;
          result = "Draw!";
        }
        else if(person == 'Rock' && computer == 'Scissors')
        {
          score.wins++;
          result = 'You win!';
        }
        else if(person == 'Paper' && computer == 'Rock')
        {
          score.wins++;
          result = 'You win!';
        }
        else if(person == 'Scissors' && computer == 'Paper')
        {
          score.wins++;
          result = 'You win!';
        }
        else
        {
          score.loses++;
          result = 'You lose!'
        }

        //stores the score to the local storage
        localStorage.setItem('score', JSON.stringify(score));

        return result;
      }

      function showScore()//returns the board for the score
      {
        scoreBoard.innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Draws: ${score.draws}`;
      }

      function battle(person)//this funcrion lets the person and computer battle and finds the winner
      {
        let computer = computersMove();

        let winOrLose = findWinner(person, computer);
        
        whoWins.innerHTML = winOrLose;
        playerComputer.innerHTML = `You 
      <img class="move-icon" src="images/${person}-emoji.png" alt="">
      <img class="move-icon" src="images/${computer}-emoji.png" alt="">
      Computer`;

        //Shows the alert with the persons and computers move + the winner + the score board.
        showScore();
      }

      function resetScore()
      {
        score.wins = 0;
        score.loses = 0;
        score.draws = 0;
        localStorage.removeItem('score');
        whoWins.innerHTML = '';
        playerComputer.innerHTML = '';
        showScore();
      }