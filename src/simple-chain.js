const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position < 1 || position > this.arr.length - 1) {
      this.arr = [];
      throw 'Error';
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.slice();
    this.arr = [];
    return result.join('~~');
  }
};

module.exports = chainMaker;
