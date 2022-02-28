//palindrome permutation

const palindromePerm = (str) => {  //palindrome permutation
  let strArr = str.toLowerCase().split(' ');
  let strHash = {};
  let strCount = 0;
  for(const str of strArr){
    for(let i = 0; i < str.length; i++){
      strCount++;
      const char = str[i];
      if(strHash[char]){
        strHash[char]++;
      } else {
        strHash[char] = 1;
      }
    }
  }
  let oddCount = 0;
  for(const key in strHash){
    if(strHash[key] % 2 !== 0){
      oddCount++;
    }
  }
  return oddCount < 2;
}

console.log(palindromePerm('Tact Coa'));
