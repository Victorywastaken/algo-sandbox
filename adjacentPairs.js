const restoreArray = (adjacentPairs) => {
  let result = [];
  let countHash = {};
  for(let i = 0; i < adjacentPairs.length; i++){
    for(const elem of adjacentPairs[i]){
      inHash(countHash, elem);
    }
  }

  let first = Object.keys(countHash).filter(key => countHash[key] === 1)[0]; //1
  result.push(parseInt(first));
  let resultIndex = 0;

  while(result.length !== adjacentPairs.length + 1){
    findPair(adjacentPairs, result, resultIndex);
  }
  return result;
}

const findPair = (adjacentPairs, result, index) => {
  for(let i = 0; i < adjacentPairs.length; i++){
    let subArray = adjacentPairs[i];
    for(let j = 0; j < subArray.length; j++){
      if(result[index] === subArray[j]){ //ANYTHING IN THE SUBARRAY EQUAL 1?
        if(j === 1){
          result.push(subArray[j - 1])
        } else {
          result.push(subArray[j + 1])
        }
        index++;
      }
    }
  }
}

const inHash = (hash, element) => {
  if(hash[element]){
    hash[element]++;
  } else {
    hash[element] = 1;
  }
}

let pairs = [[2,1],[3,4],[3,2]];

console.log(restoreArray(pairs));
