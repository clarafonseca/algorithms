function findMaxSum(arr, k) {
  if (k <= 0  || k > arr.length) return null;
  let currentSum = 0;
  let maxSum = -Infinity;

  for(let i = 0; i < arr.length; i++) {
      currentSum += arr[i];
      if (i >= k - 1) {
        maxSum = Math.max(currentSum, maxSum);
        currentSum -= arr[i - (k - 1)]
      }
  }

  return maxSum;
}

console.log(findMaxSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // 24