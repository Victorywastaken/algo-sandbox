// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc.

// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// a2[c]a2[c]a2[c]

// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// Input: s = "4[a5[c]]"
// Output: acccccacccccacccccaccccc

// Constraints:

// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].

//1. store the number
//2. [ '[' ]
//3. store everything inside until i hit a closing bracket
//4. pop out of stack
//5. decrement the number until 0, and repeat everything inside the brackets

const decoder = (str) => {
  let result = '';
  let count = 0;
  let bracketCount = 0;
  let stack = [];
  let subString = '';

  for(let i = 0; i < str.length; i++){
    let char = str[i];
    //check for count
    if(typeof parseInt(char) === 'number' && stack.length === 0){
      count = parseInt(char);
    }
    //check for brackets
    if(char === '['){
      stack.push(char);
      bracketCount++;
    }
    //check for substr
    if(stack.length > 0 && char !== ']'){
      subString.concat(char);
    }
    //check brackets
    if(char === ']'){
      stack.pop();
      bracketCount++;
      while(count > 0){
        result.concat(subString);
        count--
      }
    }
  }
  if(bracketCount === 0){
    return result;
  } else {
    return decoder(result);
  }
}

var decodeString = function(str) {
    /*
        we have 4 possibilities
        1) opening braces -> new sequence starts, so
        add curr string and curr number to the stack, reassign both
        to initial values
        2) closing braces -> the sequence is over, it is time to create a substring
        by getting prev string and prev number from the stack, add prev string(repeated prev num times)
        to curr string
        3) if it is number add to curr num
        4) if it is char add to curr string
    */
    let stack = []; // []
    let currStr = ''; // 'a'
    let currNum = 0; // 0

    for (let i = 0; i < str.length; i ++) {
        if (str[i] === '[') {
            stack.push(currStr);
            stack.push(currNum);
            currStr = '';
            currNum = 0;
        } else if (str[i] === ']') {
            let prevNum = stack.pop(); // 3
            let prevStr = stack.pop(); // ''
            currStr = prevStr + currStr.repeat(prevNum); // '' + 'a'.repeat(3) a.k.a. aaa
        } else if (str[i] >= '0' && str[i] <= '9') {
            currNum = currNum * 10 + Number(str[i]);
        } else {
            currStr += str[i];
        }
    }

    return currStr;
}

"3[a2[c]]"
