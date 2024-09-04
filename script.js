const boxes = document.querySelectorAll(".box");
let count = 0;

let gridArr = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let flatArray = gridArr.flat();

// Mark and winning function
const mark = (e) => {
  if (!e.target.innerHTML) {
    const position = e.target.dataset.index;
    if (count % 2 == 0) {
      flatArray[position] = "O";
      gridArr = reNestArray(flatArray, 3);
    } else {
      flatArray[position] = "X";
      gridArr = reNestArray(flatArray, 3);
    }
    count++;
    renderGrid();
    setTimeout(calculateWin, 0);
  }
};

// Render ]
const renderGrid = () => {
  boxes.forEach((box, index) => {
    box.innerHTML = flatArray[index];
  });
};

// Calculate Win
const calculateWin = () => {
  for (let i = 0; i < 3; i++) {
    if (
      (gridArr[i][1] != "" &&
        gridArr[i][0] == gridArr[i][1] &&
        gridArr[i][1] == gridArr[i][2]) ||
      (gridArr[0][i] != "" &&
        gridArr[0][i] == gridArr[1][i] &&
        gridArr[1][i] == gridArr[2][i])
    ) {
      gridArr = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      flatArray = gridArr.flat();

      alert("Game Ended");
    }
  }
};

function reNestArray(flatArray, chunkSize) {
  const finalArr = [];
  flatArray.reduce((acc, _, i) => {
    if (i % chunkSize === 0 && acc.length > 0) {
      finalArr.push(acc);
      acc = [];
      acc.push(_);
    } else if (i == 8) {
      acc.push(_);
      finalArr.push(acc);
    } else {
      acc.push(_);
    }
    // if (i % chunkSize === 0) acc.push(flatArray.slice(i, i + chunkSize));
    return acc;
  }, []);
  return finalArr;
}

// Event listeners
boxes.forEach((box) => {
  box.addEventListener("mouseover", (e) => {
    if (e.target.innerHTML) {
      box.style.cursor = "default";
      box.style.backgroundColor = "#34495e";
    }
  });
  box.addEventListener("click", mark);
});
