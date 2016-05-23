////////////////////////////////////////////////
/*   DISCLAIMER: After reviewing the fundamentals training multiple times,
reviewing the discussions in slack and searching google, I only had a basic
understanding of how to write this program and couldn't figure out how to make
it work. I know I should have asked others for help, but I was very aprehensive
because I knew I would be asking many, many, many, many questions and didnt want
to annoy anyone just yet. So I found a couple of working programs on github and
tried to 'reverse educate' myself on how they worked. The following code is
mostly copied from Denzel Adams' code. I modified a few things, but it's mosly
the same. Despite my lack of understanding on how to write the program from
scratch right now, I have learned a ton more from Denzels code and will apply
that in future assignments, without copying. - Joe C.  */
////////////////////////////////////////////////


////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either Rock, Paper, or Scissors.");
    return prompt("Please choose either Rock, Paper, or Scissors.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
  return move || getInput();
};

function getComputerMove(move) {
  return move || randomPlay();
};

function getWinner(playerMove, computerMove) {
  var winner;
  if (playerMove === computerMove) {
      winner = "Tie!";
}
  else if (playerMove === "rock") {
      if (computerMove === "scissors") {
          winner = "You";
      }
      else{
          winner = "Computer";
      }
}
  else if (playerMove === "paper") {
      if (computerMove === "rock") {
          winner = "You";
      }
      else{
          winner = "Computer";
      }
}
  else if (playerMove === "scissors") {
      if (computerMove === "paper") {
          winner = "You";
      }
      else{
          winner = "Computer";
      }
  }
      return winner;
};

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors!");
        alert("Let's play Rock, Paper, Scissors!");

    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
            if (winner === "Tie!") {
                console.log ("Tie!");
                    alert("Tie!");
                    playerWins+=0, computerWins+=0;
        }

            else if (winner === "You") {
                console.log ("You win this round!");
                    alert ("You win this round!");
                    playerWins++;
            }

            else if (winner === "Computer"){
                console.log ("Computer wins this round!");
                    alert ("Computer wins this round!");
                    computerWins++;
            }

                console.log("The score is You "+playerWins+" Computer "+computerWins+" ");
                    alert ("The score is You "+playerWins+" Computer "+computerWins+" ");
    }

            if (playerWins === 5) {
                console.log ("Congratulations! You win!");
                    alert ("Congratulations! You win!");

    }
            else if(computerWins === 5)  {
                console.log ("Computer wins! Better luck next time!");
                    alert ("Computer wins! Better luck next time!");
    }
        return [playerWins, computerWins];
};

playToFive();
