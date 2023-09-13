// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

//* my initial solution checking forwards and background and swapping values. It got 0s to the end but did not maintain the relative order of the other elements

const moveZeroes = (nums) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    if (nums[start] === 0) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      end--;
    } else {
      start++;
    }
  }
  return nums;
};

//* an answer I borrowed from leetcode u/Karina_Olenina which performs better by shifting 0s towards the end of the array as it is iterated through

const moveZeroes2 = (nums) => {
  let current = 0;
  let next = current + 1;

  while (next <= nums.length - 1) {
    if (nums[current] !== 0) {
      current++;
      next++;
    } else {
      if (nums[next] !== 0) {
        [nums[current], nums[next]] = [nums[next], nums[current]];
        current++;
      }
      next++;
    }
  }
  console.log(nums);
};

//* for loop version

const moveZeroes3 = (nums) => {
  let current = 0;

  for (let next = current + 1; next <= nums.length - 1; next++) {
    if (nums[current] !== 0) {
      current++;
    } else {
      if (nums[next] !== 0) {
        [nums[current], nums[next]] = [nums[next], nums[current]];
        current++;
      }
    }
  }
  console.log(nums);
};

const nums = [0, 1, 0, 3, 12];
console.log(moveZeroes2(nums));
