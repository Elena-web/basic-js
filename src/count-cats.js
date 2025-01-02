const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
	let index = 0;
	for(let elem of matrix){
		for(let i = 0; i < elem.length; i += 1) {
			if( elem[i] === '^^') {
				index++; 
			}
		}
	}
 return index;
}

module.exports = {
  countCats
};
