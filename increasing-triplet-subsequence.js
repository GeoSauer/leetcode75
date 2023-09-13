// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

//* my initial attempt that works for a direct sequential triplet but doesn't account for a dispersed triplet
const increasingTriplet = (nums) => {
  let result = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1] && nums[i + 1] < nums[i + 2]) {
      result = true;
      return result;
    } else result = false;
  }
  return result;
};

//* my refined answer with a lil nudge from the GPT
const increasingTriplet2 = (nums) => {
  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= first) {
      first = nums[i];
    }
    if (nums[i] > first && nums[i] <= second) {
      second = nums[i];
    }
    if (nums[i] > first && nums[i] > second) return true;
  }
  return false;
};

//* the GPT answer
const increasingTriplet3 = (nums) => {
  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= first) {
      first = nums[i];
    } else if (nums[i] <= second) {
      second = nums[i];
    } else {
      // If we find an element greater than both first and second, return true.
      return true;
    }
  }

  // If we didn't find a valid triplet, return false.
  return false;
};

const nums = [2, 1, 5, 0, 4, 6];
// console.log(increasingTriplet(nums));
// console.log(increasingTriplet2(nums));
console.log(increasingTriplet3(nums));
