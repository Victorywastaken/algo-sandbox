// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bake -> false

function stringCompare(stringOne, stringTwo){
  if(stringOne.length === stringTwo.length){
    changeOne(stringOne, stringTwo);
  }
  if(stringOne.length > stringTwo.length || stringTwo.length > stringOne.length){
    let longerStr = Math.max(stringOne.length, stringTwo.length);
    let shorterStr = Math.min(stringOne.length, stringTwo.length);

    if(Math.abs(longerStr - shorterStr) > 1){
      return false
    } else {
      addOrRemoveOne(stringOne, stringTwo);
    }
  }
  return true;
}

const changeOne = (stringOne, stringTwo) => {
  for(let i = 0; i < stringOne.length; i++){

  }
}

//remove one
//insert one
//change one
