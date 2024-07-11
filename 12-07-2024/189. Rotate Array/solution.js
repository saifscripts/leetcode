/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  const spliced = nums.splice(nums.length - (k % nums.length));
  nums.unshift(...spliced);
};
