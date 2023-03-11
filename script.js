//Factory function to store player data
function createPlayer(name, symbol, playerBoard) {
  return {
    name,
    symbol,
    playerBoard,

    play(box) {
      playerBoard.push(box);
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
  for (const boxes of box) {
    boxes.addEventListener("click", () => {
      if (boxes.textContent === "O" || boxes.textContent === "X") {
        void 0;
      } else if (boxes.textContent !== undefined) {
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
      if (player1.playerBoard.length + player2.playerBoard.length === 9) {
        console.log("TIE");
      } else {
        //To check both player's board
        switch (player1.playerBoard.sort().join("")) {
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
        switch (player2.playerBoard.sort().join("")) {
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

playerAction();
