// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

//* this works in my IDE but throws a TypeError on Leetcode
// const productExceptSelf = (nums) => {
//   const answer = [];
//   for (let i = 0; i < nums.length; i++) {
//     const excludingSelf = nums.filter((num) => num !== nums[i]);
//     console.log(excludingSelf);
//     const product = excludingSelf.reduce((acc, val) => acc * val);
//     answer.push(product);
//   }
//   return answer;
// };

//* this is a great solution with some helpful notes submitted by u/coolsoftwaretyler
var productExceptSelf = function (nums) {
  // First, create a prefix array that moves from the left,
  // gathering the running product of the prefix at each index
  const prefix = [];

  // Move left in the input array
  for (let i = 0; i < nums.length; i++) {
    // If i === 0, start with `1`, since there is no prefix
    if (i === 0) {
      prefix[i] = 1;
    } else {
      // Otherwise, multiply nums[i-1] times the prefix at position i-1,
      // and add that to the prefix array at position i
      prefix[i] = nums[i - 1] * prefix[i - 1];
    }
  }

  // Then, let's create a suffix array
  const suffix = [];

  // Move right in the input array
  for (let i = nums.length - 1; i >= 0; i--) {
    // For the last index, we have no suffix, so just add a 1 to that position
    if (i === nums.length - 1) {
      suffix[i] = 1;
    } else {
      // Otherwise, we multiply nums[i+1] by the suffix at position i+1
      // and add that to the suffix array at position i
      suffix[i] = nums[i + 1] * suffix[i + 1];
    }
  }

  // Finally, our result array should be the products of prefix * suffix for each position
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
};

//* this is the final version, adhering to the space constraints, also by u/coolsoftwaretyler
var productExceptSelf = function (nums) {
  // Set up an empty array as our result
  const result = [];

  // Initialize a prefix tracker at 1
  let prefix = 1;

  // Loop through the input array - for each position,
  // the result array should equal the prefix tracker.

  // Then, update the prefix tracker to be the product of itself,
  // multiplied by the input value at the position.
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // Initialize a suffix tracker at 1
  let suffix = 1;

  // Loop backwards through the array.
  // For each iteration, set the result array to be
  // the product of itself multiplied by the suffix tracker.

  // Then, update the suffix tracker to be the product of itself,
  // multiplied by the input value at that position.
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
};

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
