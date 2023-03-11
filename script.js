class gameBoard {
  constructor(board) {
    this.board = board;
  }
}
const currentBoard = new gameBoard([]);
function displayBoard() {
  //Displays each array into the correct divs. But I'm not too comfortable with this code.
  const elements = [].slice.call(document.querySelectorAll("[class^=gameBox]"));
  elements.forEach(function (div, idx) {
    if (currentBoard.board.length >= idx) {
      div.textContent = currentBoard.board[idx];
    }
  });
}

//Factory function to store player values
function createPlayer(name, turn, symbol, playerBoard) {
  return {
    name,
    turn,
    symbol,
    playerBoard,

    play() {
      currentBoard.push();
      playerBoard.push();
    },
  };
}

const player1 = createPlayer("player1", true, "O", []);
const player2 = createPlayer("player2", false, "X", []);

//Function to make divs clickable and store player's action at the same time
function playerAction() {
  const box = document.querySelectorAll(".box");
  for (const boxes of box) {
    boxes.addEventListener("click", () => {
      // player1.play(boxes.getAttribute("data-value"));
      if (boxes.textContent === "O" || boxes.textContent === "X") {
        void 0;
      } else if (boxes.textContent !== undefined) {
        boxes.textContent += player1.symbol;
      }
    });
  }
}

displayBoard();
playerAction();
