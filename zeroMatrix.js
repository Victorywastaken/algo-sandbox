let matrix = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
]

console.table(matrix);

const zeroMatrix = (matrix) => {
  let marker = Infinity;

  for(let i = 0; i < matrix.length; i++){
    let row = matrix[i];

    for(let j = 0; j < row.length; j++){
      let num = row[j]
      if(num === 0){
        //change entire row to Infinity;
        matrix[i] = new Array(row.length).fill(marker);

        //get column length to set up while look
        let columnLength = matrix.length;
        let columnCount = 0;

        //change each column to be Infinity
        while(columnCount < columnLength){
          matrix[columnCount][j] = Infinity;
          columnCount++;
        }
      }
    }
  }
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[0].length; j++){
      if(matrix[i][j] === Infinity) matrix[i][j] = 0;
    }
  }
  return matrix;
}

console.table(zeroMatrix(matrix));
