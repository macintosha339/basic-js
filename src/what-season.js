const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const times = {
    'winter': [11, 0, 1],
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn|fall': [8, 9, 10]
  };

  let curTime = '';

  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) === '[object Date]') {
    for (let season in times) {
      for (let month of times[season]) {
        if (date.getMonth() == month) {
          curTime = season;
          return curTime;
        }
      }
    }
  } else {
    throw 'ERROR';
  }
};
