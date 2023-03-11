//Factory function to store player data
function createPlayer(name, symbol, playerBoard) {
  return {
    name,
    symbol,
    playerBoard,

    play(box) {
      playerBoard.push(box);
    },

    clearPlayerBoard() {
      playerBoard.length = 0;
    },
  };
}
const player1 = createPlayer("player1", "O", []);
const player2 = createPlayer("player2", "X", []);

//Switch symbols based on odd or even "n" number.
let turnCheck = (function (n) {
  return function () {
    n++;
    return n;
  };
})(0);

//Function to make divs clickable and tie to DOM. Also to store player's action at the same time
function playerAction() {
  const box = document.querySelectorAll(".box");
  let turnCheckRef = turnCheck(-1); //Reference to turnCheck fuction
  const result = document.getElementById("result");
  for (const boxes of box) {
    boxes.addEventListener("click", () => {
      if (boxes.textContent === "O" || boxes.textContent === "X") {
        //If box is filled, nothing happens
        void 0;
      } else if (boxes.textContent !== undefined) {
        //Checks who's turn it is
        if (turnCheckRef % 2 === 0) {
          boxes.textContent += player2.symbol;
          player2.play(boxes.getAttribute("data-value"));
          turnCheckRef++;
        } else if (turnCheckRef % 2 !== 0) {
          boxes.textContent += player1.symbol;
          player1.play(boxes.getAttribute("data-value"));
          turnCheckRef++;
        }
      }
      //Winning/Tie Logic to check winner each time a box is clicked.
      if (
        player1.playerBoard.length + player2.playerBoard.length === 9 &&
        result.textContent === ""
      ) {
        result.textContent = "Tie! No one won.";
      } else {
        //To check both player's board
        if (player1.playerBoard.sort().join("").includes("012")) {
          result.textContent = "Player 1 Wins! Player 2 Loses!";
        } else if (player1.playerBoard.sort().join("").includes("345")) {
          result.textContent = "Player 1 Wins! Player 2 Loses!";
        } else if (player1.playerBoard.sort().join("").includes("678")) {
          result.textContent = "Player 1 Wins! Player 2 Loses!";
        } else if (player1.playerBoard.sort().join("").includes("036")) {
          result.textContent = "Player 1 Wins! Player 2 Loses!";
        } else if (player1.playerBoard.sort().join("").includes("147")) {
          result.textContent = "Player 1 Wins! Player 2 Loses!";
        } else if (player1.playerBoard.sort().join("").includes("258")) {
          result.textContent = "Player 1 Wins! Player 2 Loses!";
        } else if (player1.playerBoard.sort().join("").includes("048")) {
          result.textContent = "Player 1 Wins! Player 2 Loses!";
        } else if (player1.playerBoard.sort().join("").includes("246")) {
          result.textContent = "Player 1 Wins! Player 2 Loses!";
        }

        if (player2.playerBoard.sort().join("").includes("012")) {
          result.textContent = "Player 2 Wins! Player 1 Loses!";
        } else if (player2.playerBoard.sort().join("").includes("345")) {
          result.textContent = "Player 2 Wins! Player 1 Loses!";
        } else if (player2.playerBoard.sort().join("").includes("678")) {
          result.textContent = "Player 2 Wins! Player 1 Loses!";
        } else if (player2.playerBoard.sort().join("").includes("036")) {
          result.textContent = "Player 2 Wins! Player 1 Loses!";
        } else if (player2.playerBoard.sort().join("").includes("147")) {
          result.textContent = "Player 2 Wins! Player 1 Loses!";
        } else if (player2.playerBoard.sort().join("").includes("258")) {
          result.textContent = "Player 2 Wins! Player 1 Loses!";
        } else if (player2.playerBoard.sort().join("").includes("048")) {
          result.textContent = "Player 2 Wins! Player 1 Loses!";
        } else if (player2.playerBoard.sort().join("").includes("246")) {
          result.textContent = "Player 2 Wins! Player 1 Loses!";
        }
      }
    });
  }
}

//Buttons to start/restart game
function start_restartButtonFunctions() {
  const startMenu = document.getElementById("start");
  const startButton = document.getElementById("startButton");
  const gameBoard = document.getElementById("gameBoard");
  const restartButton = document.getElementById("restartButton");
  const result = document.getElementById("result");
  startButton.addEventListener("click", () => {
    startMenu.style.display = "none";
    startButton.style.display = "none";
    gameBoard.style.display = "grid";
    restartButton.style.display = "flex";
  });
  restartButton.addEventListener("click", () => {
    let box = document.querySelectorAll(".box");
    for (const boxes of box) {
      boxes.textContent = undefined;
    }
    player1.clearPlayerBoard();
    player2.clearPlayerBoard();
    result.textContent = "";
  });
}

playerAction();
start_restartButtonFunctions();
