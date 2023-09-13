// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

//* my initial solution worked but didn't account for edge cases regarding the first and last indexes of the array

const canPlaceFlowers = (flowerbed, n) => {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;
      count += 1;
    }
  }

  return count >= n ? true : false;
};

//* this more robust version addresses the concerns raised by the first solution

const canPlaceFlowers2 = (flowerbed, n) => {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const prev = i === 0 ? 0 : flowerbed[i - 1];
      const next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];

      if (prev === 0 && next === 0) {
        flowerbed[i] = 1;
        count += 1;
      }
    }
  }

  return count >= n;
};

const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
console.log(canPlaceFlowers(flowerbed, n));
