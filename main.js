import "./style.css";

const boxes = document.querySelectorAll(".box");
let player = "O";
let gridArr = Array(9).fill("");

// Mark
const mark = (e) => {
  if (!e.target.innerHTML) {
    const position = e.target.dataset.index;
    player == "O" ? (gridArr[position] = "O") : (gridArr[position] = "X");
    e.target.innerHTML = gridArr[position];
    player = player == "O" ? "X" : "O";
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
    const winner = player == "O" ? 2 : 1;
    alert(`Player ${winner} won`);
    reset();
  }
};

//Reset Grid
const reset = () => {
  player = "O";
  gridArr = Array(9).fill("");
  boxes.forEach((box, index) => {
    box.innerHTML = gridArr[index];
  });
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
