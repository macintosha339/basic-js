const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return  Array.isArray(members) ? members.reduce(function(prev, item) {
    return prev = typeof item == 'string' && isNaN(item) && item != undefined ? prev.concat(item.trim()[0].toUpperCase()) : prev;
}, []).sort().join('') : false;
};
