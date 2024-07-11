/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const obj = {};
  let result;

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] = obj[nums[i]] + 1;
    }

    if (obj[nums[i]] > nums.length / 2) {
      result = nums[i];
      break;
    }
  }

  return result;
};
