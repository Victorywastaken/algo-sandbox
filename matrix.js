const spiralOrder = function(matrix) {
  //if allowed to mutate original matrix;
  const result = []
  while(matrix.length){
    const first = matrix.shift()
    result.push(...first)
    for(const m of matrix){ //456
      let val = m.pop()
      if(val)
        result.push(val)
        m.reverse()
    }
    matrix.reverse()
  }
  return result
};

spiralOrder([[1,2,3],[4,5,6],[7,8,9]])
