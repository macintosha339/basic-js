const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = String(str);
  let repTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1,
      addRepTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1,
      add = options.hasOwnProperty('addition') ? String(options.addition) : '',
      separator = options.hasOwnProperty('separator') ? String(options.separator) : '+',
      addSeparator = options.hasOwnProperty('additionSeparator') ? String(options.additionSeparator) : '|';

  for (let i = 1; i < addRepTimes; i++) {
    add += addSeparator + options.addition;
  }

  result += add;

  for(let j = 1; j < repTimes; j++) {
    result += separator + String(str).concat(add);
  }
  return result;
};
  