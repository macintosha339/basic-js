const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;  
  for (let key of backyard) {
    for (let item in key) {
      if (key[item] === '^^') {
        count++;
      }
    }
  }
  return count;
};
