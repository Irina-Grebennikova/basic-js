const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = String(n);
  let numsToCompare = [];
  for (let i = 0; i < n.length; i++) {
    let numToAdd = +n.replace(n[i], '');
    numsToCompare.push(numToAdd);
  }
  numsSorted = numsToCompare.sort((a, b) => a - b);
  return numsSorted[numsSorted.length - 1];
}

module.exports = {
  deleteDigit
};
