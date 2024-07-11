/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let i = 0;

  while (i < nums.length) {
    const totalOccurrence = nums.filter((n) => n === nums[i]).length;

    if (totalOccurrence > 2) {
      nums.splice(i, 1);
      continue;
    }

    i++;
  }
};
