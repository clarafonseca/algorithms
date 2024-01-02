/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  let result = [];

  for (const num of nums) {
    let found = false;

    for (const row of result) {
      if (!row.includes(num)) {
        row.push(num);
        found = true;
        break;
      }
    }

    if (!found) {
      result.push([num]);
    }
  }

  return result;
};
