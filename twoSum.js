//two sum
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

//two sum with hashmap
var twoSum = function(nums, target) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hashMap[diff] !== undefined) {
      return [hashMap[diff], i];
    }
    hashMap[nums[i]] = i;
  }
}
