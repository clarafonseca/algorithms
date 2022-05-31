/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**	Time Limit Exceeded **/
var subarraySum = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let j = i;

    function teste(num) {
      if (num == k) {
        count++;
      }

      if (j < nums.length) {
        j++;
        teste(num + nums[j]);
      }
    }

    teste(nums[i]);
  }

  return count;
};

console.log(subarraySum([1, 1, 1], 2));
// console.log(subarraySum([1, 2, 3], 3));
