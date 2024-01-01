/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

var findContentChildren = function (g, s) {
  if (s.length === 0) return 0;
  g.sort((a, b) => a-b);
  s.sort((a, b) => a-b);

  let contentChildren = 0;
  let i = 0;
  let j = 0;

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      contentChildren++;
      i++;
    }
    j++;
  }

  return contentChildren;
};

console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));
