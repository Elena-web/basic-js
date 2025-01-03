const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	let result = {};
	for (let elem of domains) {
		elem = elem.split('.').reverse();
		for(let i = 0; i < elem.length; i += 1) {
			elem[i] = '.' + elem[i];
		}
		let key = '';
		for(let i = 0; i < elem.length; i += 1) {
			key = key + elem[i];
			result[key] = (result[key] || 0) + 1;
		}
	}
	return result;
}
module.exports = {
  getDNSStats
};
