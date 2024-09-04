const boxes = document.querySelectorAll(".box");

let symbol = "O";
let scores = [0, 0];

let gridArr = Array(9).fill("");

const playerScore1 = document.querySelector(".player.one").children[1];
const playerScore2 = document.querySelector(".player.two").children[1];

// Mark
const mark = (e) => {
  if (!e.target.innerHTML) {
    const position = e.target.dataset.index;
    symbol == "O" ? (gridArr[position] = "O") : (gridArr[position] = "X");
    e.target.innerHTML = gridArr[position];
    symbol = symbol == "O" ? "X" : "O";
    setTimeout(calculateWin, 100);
  }
};

// Calculate Win
const calculateWin = () => {
  if (
    (gridArr[0] && gridArr[0] == gridArr[1] && gridArr[1] == gridArr[2]) ||
    (gridArr[3] && gridArr[3] == gridArr[4] && gridArr[4] == gridArr[5]) ||
    (gridArr[6] && gridArr[6] == gridArr[7] && gridArr[7] == gridArr[8]) ||
    (gridArr[0] && gridArr[0] == gridArr[3] && gridArr[3] == gridArr[6]) ||
    (gridArr[1] && gridArr[1] == gridArr[4] && gridArr[4] == gridArr[7]) ||
    (gridArr[2] && gridArr[2] == gridArr[5] && gridArr[5] == gridArr[8]) ||
    (gridArr[0] && gridArr[0] == gridArr[4] && gridArr[4] == gridArr[8]) ||
    (gridArr[2] && gridArr[2] == gridArr[4] && gridArr[4] == gridArr[6])
  ) {
    const winner = symbol == "O" ? 1 : 0;
    scores[winner] += 1;
    alert(`Player ${winner + 1} won`);
    reset();
    return;
  }
  if (!gridArr.some((item) => item == "")) {
    alert(`Its A DRAW`);
    reset();
    return;
  }
};

//Reset Grid
const reset = () => {
  symbol = "O";
  gridArr = Array(9).fill("");
  boxes.forEach((box, index) => {
    box.innerHTML = gridArr[index];
  });

  playerScore1.innerHTML = scores[0];
  playerScore2.innerHTML = scores[1];
};

// Event listeners
boxes.forEach((box) => {
  box.addEventListener("mouseover", (e) => {
    if (e.target.innerHTML) {
      box.classList.add("hover");
    }
  });
  box.addEventListener("mouseout", (e) => {
    box.classList.remove("hover");
  });
  box.addEventListener("click", mark);
});
