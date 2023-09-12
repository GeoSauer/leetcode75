// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

const reverseVowels = (str) => {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const strChars = str.split("");
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    while (start < end && !vowels.has(strChars[start])) {
      start++;
    }
    while (start < end && !vowels.has(strChars[end])) {
      end--;
    }

    [strChars[start], strChars[end]] = [strChars[end], strChars[start]];
    start++;
    end--;
  }

  return strChars.join("");
};

const str = "hello";
console.log(reverseVowels(str));
