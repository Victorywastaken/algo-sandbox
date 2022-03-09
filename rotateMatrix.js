function rotateMatrix(matrix){
  let result = [];
  for(let i = 0; i < matrix[0].length; i++){
    let row = [];
    for(let j = matrix.length - 1; j >= 0; j--){
      row.push(matrix[j][i]);
    }
    result.push(row);
  }
  return result;
}

console.table(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
