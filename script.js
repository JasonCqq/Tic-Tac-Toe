// class gameBoard {
//   constructor(board) {
//     this.board = board;
//   }
// }
// const currentBoard = new gameBoard([]);

// function displayBoard() {
//   //Displays each array into the correct divs. But I'm not too comfortable with this code.
//   const elements = [].slice.call(document.querySelectorAll("[class^=gameBox]"));
//   elements.forEach(function (div, idx) {
//     if (currentBoard.board.length >= idx) {
//       div.textContent = currentBoard.board[idx];
//     }
//   });
// }

//Factory function to store player values
function createPlayer(name, turn, symbol, playerBoard) {
  return {
    name,
    turn,
    symbol,
    playerBoard,

    play(box) {
      // currentBoard.board.push();
      playerBoard.push(box);
      console.log(playerBoard);
    },
  };
}

const player1 = createPlayer("player1", true, "O", []);
const player2 = createPlayer("player2", false, "X", []);

//Function to make divs clickable and store player's action at the same time
function playerAction() {
  const box = document.querySelectorAll(".box");
  for (const boxes of box) {
    //Add clickable boxes
    boxes.addEventListener("click", () => {
      if (boxes.textContent === "O" || boxes.textContent === "X") {
        void 0;
      } else if (boxes.textContent !== undefined) {
        boxes.textContent += player1.symbol;
        player1.play(boxes.getAttribute("data-value"));
      }
      //Logic to check winner each time a box is clicked.
      if (player1.playerBoard.length + player2.playerBoard.length === 9) {
        console.log("TIE");
      } else {
        switch (
          player1.playerBoard.sort().join("") &&
          player2.playerBoard.sort().join("")
        ) {
          case "012":
            console.log("WIN");
            break;
          case "345":
            console.log("WIN");
            break;
          case "678":
            console.log("WIN");
            break;
          case "036":
            console.log("WIN");
            break;
          case "147":
            console.log("WIN");
            break;
          case "258":
            console.log("WIN");
            break;
          case "048":
            console.log("WIN");
            break;
          case "246":
            console.log("WIN");
            break;
        }
      }
    });
  }
}

// displayBoard();
playerAction();
