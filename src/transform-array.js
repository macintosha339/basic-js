const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let finish = [];
  if (!Array.isArray(arr)) throw new Error();

  for(let i = 0; i < arr.length; i++) {

    if(arr[i] == '--discard-next') i++;
    else if (arr[i] == '--discard-prev') {

      if (arr[i - 2] != '--discard-next') {
        finish.pop();
      }
    } else if (arr[i] == '--double-next') {
      if (i < arr.length - 1) finish.push(arr[i+1]);
    } else if(arr[i] == '--double-prev') {
    if (arr[i-2] != '--discard-next' && finish.length > 0) {
      finish.push(finish[finish.length - 1]);
    }
  } else {
    finish.push(arr[i]);
  } 
}

  return finish;
};
