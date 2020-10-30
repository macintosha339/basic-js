const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
   this.count = 1;
    if (arr.some(elem => Array.isArray(elem))) {
        this.calculateDepth(arr.reduce((res, element) => res.concat(element), []
        ));
        this.count++;
    }
    return this.count;
  }
};