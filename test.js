const gridArr = [
  [0, 1, 1],
  [1, 0, 1],
  [0, 0, 1],
];

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

// Example usage
const flatArray = gridArr.flat();
const nestedArray = reNestArray(flatArray, 3); // Creates chunks of size 2
//   console.log(nestedArray); // [[1, 2], [3, 4], [5, 6]]

console.log(nestedArray);
