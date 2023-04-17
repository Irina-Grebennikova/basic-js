const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    let next = str[i + 1];

    if (curr !== next && count === 1) {
      res += curr;
    } else if (curr === next) {
       count++;
    } else {
      res += count + curr;
      count = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
