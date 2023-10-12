const whereIsWaldo = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    let item = matrix[0][0];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== item) {
        console.log(`[${i + 1}][${j + 1}]`);
      }
    }
  }
};

console.log("1");
whereIsWaldo([
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"],
]);

console.log("3");
whereIsWaldo([
  ["c", "c", "c", "c"],
  ["c", "c", "c", "d"],
]);

console.log("3");
whereIsWaldo([
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"],
]);
