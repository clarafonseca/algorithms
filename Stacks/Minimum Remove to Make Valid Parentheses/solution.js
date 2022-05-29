/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let stack = [];
  s = s.split("");

  for (let i in s) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length) {
        stack.pop();
      } else {
        s[i] = "";
      }
    }
  }

  for (let i in stack) {
    s[stack[i]] = "";
  }

  return s.join("");
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
console.log(minRemoveToMakeValid("a)b(c)d"));
console.log(minRemoveToMakeValid("))(("));
