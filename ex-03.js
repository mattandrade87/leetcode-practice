// Problem #03

const lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxLength = 0;
  const charSet = new Set();

  for (let right = 0; right < s.length; right++) {
    console.log(charSet);
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
