// Solution 1 (Time Limit Exceeded)
const canJump1 = function (nums) {
  let result = false;

  jump(0); // jump to the first position

  function jump(c) {
    // check if the jump can reach the last index
    if (c + nums[c] >= nums.length) {
      result = true;
    }

    // if not, jump to the other possible positions
    for (let i = c + 1; i <= c + nums[c]; i++) {
      jump(i);
    }
  }

  return result;
};

// Solution 2
const canJump2 = function (nums) {
  let shouldReach = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= shouldReach) {
      shouldReach = i;
    }
  }

  return shouldReach === 0;
};
