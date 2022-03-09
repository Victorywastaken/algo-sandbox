const rotatedSearch = (array, target) =>{
  let left = 0;
  let right = array.length - 1;
  return rotateHelper(array, left, right, target);
}

const rotateHelper = (array, left, right, target) => {
  let mid = Math.floor((left + right) / 2);
  if (array[mid] === target) {
    return mid;
  }
  if(right < left){
    return -1;
  }
  /*Either the left or right half must be normally ordered. Find out which side
  * is normally ordered, and then use the normally ordered half to figure out
  * which side to search to find x. */

  if(array[left] <= array[mid]){ //left is normally ordered
    if(target >= array[left] && target < array[mid]){
      return rotateHelper(array, left, mid - 1, target); //search left
    } else {
      return rotateHelper(array, mid + 1, right, target); //search right
    }
  } else if(array[mid] < array[right]){ //right is normally ordered
    if(target > array[mid] && target <= array[right]){
      return rotateHelper(array, mid + 1, right, target); //search right
    } else {
      return rotateHelper(array, left, mid - 1, target); //search left
    }
  } else if(array[left] === array[mid]){ //left or right is all repeats
    if(array[mid] !== array[right]){ //if right is different, search it
      return rotateHelper(array, mid + 1, right, target); //search right
    } else { //Otherwise we have to search both sides
      let result = rotateHelper(array, left, mid - 1, target); //search left
      if(result === -1){
        return rotateHelper(array, mid + 1, right, target); //search right
      } else {
        return result;
      }
    }
  }
  return -1;
}

console.log(rotatedSearch([10, 15, 20, 0, 5], 15));
