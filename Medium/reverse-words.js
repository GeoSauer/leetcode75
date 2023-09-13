// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

//* gotta love just blasting through a "medium" problem like this after struggling through the ***easy*** reverse-vowels.js problem...

const reverseWords = (str) => {
  return str
    .split(" ")
    .filter((word) => word.length)
    .reverse()
    .join(" ");
};

//* it wasn't mentioned but perhaps the challenge was to complete it by manually writing the logic instead of using methods?

const reverseWords2 = (str) => {
  let reversedStr = "";
  let word = "";
  let spaceDetected = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (word.length > 0) {
        if (reversedStr.length > 0 && spaceDetected) {
          reversedStr = " " + reversedStr; // Add space between words
        }
        reversedStr = word + reversedStr;
        word = ""; // Reset word
        spaceDetected = true;
      }
    } else {
      word += str[i];
      spaceDetected = false;
    }
  }

  // Handle the last word (if any)
  if (word.length > 0) {
    if (reversedStr.length > 0 && spaceDetected) {
      reversedStr = " " + reversedStr; // Add space between words
    }
    reversedStr = word + reversedStr;
  }

  return reversedStr;
};

console.log(reverseWords("a good   example"));
