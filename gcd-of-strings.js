// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

//*Aight I chatGPT'd my way through at lot of this but it was super fun!

const gdcOfStrings = (str1, str2) => {
  // create some variables to store the lengths of the ingested strings
  const len1 = str1.length;
  const len2 = str2.length;

  // calculate GCD of string lengths using the Euclidean algorithm
  let a = len1;
  let b = len2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  const gcdLength = a;

  // extract a potential common divisor string
  const potentialGCD = str1.slice(0, gcdLength);

  // check if both strings can be constructed out of it
  if (
    str1 === potentialGCD.repeat(len1 / gcdLength) &&
    str2 === potentialGCD.repeat(len2 / gcdLength)
  ) {
    return potentialGCD;
  } else {
    return "";
  }
};

console.log(gdcOfStrings("ABCABC", "ABC"));
console.log(gdcOfStrings("ABABAB", "ABAB"));
console.log(gdcOfStrings("LEET", "CODE"));
