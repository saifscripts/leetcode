// 🚀 #LeetCode Problem: 58. Length of Last Word
// 🔗 Link: https://leetcode.com/problems/length-of-last-word/
// 💡 Difficulty: Easy
// ⌚ Solution Time: 3 minutes

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  const words = s.trim().split(' ');
  const lastWord = words[words.length - 1];
  return lastWord.length;
};
