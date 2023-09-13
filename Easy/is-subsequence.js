// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

//* worked this out with some help but I'm gonna go through and reformat all of my while loops into for loops after this

const isSubsequence = (s, t) => {
  if (s.length === 0) {
    return true;
  }

  let sIndex = 0;
  let tIndex = 0;

  while (tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex += 1;
      if (sIndex === s.length) {
        return true;
      }
    }
    tIndex += 1;
  }
  return false;
};

//* it just clicked that two-pointer functions can be done by simply declaring the second pointer before the for loop

const isSubsequence2 = (s, t) => {
  if (s.length === 0) {
    return true;
  }

  let sIndex = 0;

  for (let tIndex = 0; tIndex < t.length; tIndex++) {
    if (s[sIndex] === t[tIndex]) {
      sIndex += 1;
      if (sIndex === s.length) {
        return true;
      }
    }
  }
  return false;
};

const s = "axc";
const t = "ahbgdc";

console.log(isSubsequence(s, t));
