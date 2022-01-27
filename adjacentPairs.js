var restoreArray = (adjacentPairs) => {
  let hash = new Map();
    for(let i = 0; i < adjacentPairs.length; i++){
      hash.set(adjacentPairs[i][0], adjacentPairs[i][1]);
    }
  console.log(hash)
};

let pairs = [[2,1],[3,4],[3,2]];

restoreArray(pairs);
