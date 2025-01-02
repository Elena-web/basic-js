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
  let arr = n.toString();
  let maxNum = -Infinity;
  
  for(let i = 0; i < arr.length; i += 1) {
	const num = parseInt(arr.slice(0, i) + arr.slice(i + 1), 10);
	maxNum = Math.max(maxNum, num);
	}
	return maxNum;
}

module.exports = {
  deleteDigit
};
