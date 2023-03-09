class gameBoard {
  constructor(board) {
    this.board = board;
  }
}
const currentBoard = new gameBoard([
  "O",
  "X",
  "X",
  "O",
  "X",
  "X",
  "X",
  "X",
  "O",
]);
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
function createPlayer(name, turn, playerBoard) {
  return {
    talk() {
      console.log(`Hello I am ${name}`);
    },
  };
}

//Function to make divs clickable and store player's action at the same time
function playerAction() {
  const box = document.querySelectorAll(".box");
  const boxCounter = 0;
  for (const boxes of box) {
    boxes.addEventListener("click", () => {
      prompt("Hey");
    });
  }
}

const player1 = createPlayer("player1", true, []);
const player2 = createPlayer("player2", false, []);

displayBoard();
playerAction();
