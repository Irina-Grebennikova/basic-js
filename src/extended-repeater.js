const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);

  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = (options.addition !== undefined) ? String(options.addition) : '';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  let additions = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    additions.push(addition);
  }
  additions = additions.join(additionSeparator);

  let fullString = str + additions;
  
  let res = [];
  for (let i = 0; i < repeatTimes; i++) {
    res.push(fullString);
  }
  return res.join(separator);
}

module.exports = {
  repeater
};
