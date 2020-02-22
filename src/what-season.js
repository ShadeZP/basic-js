module.exports = function getSeason(date) {
  // remove line with error and write your code here
  if (!date) {
    return ('Unable to determine the time of year!');
  }
    
  if (date.hasOwnProperty('getMonth')||(!date instanceof Date)) {
    throw Error;
  }

  switch (date.getMonth()) {
    case 0:
    case 1:
    case 11:
      return ("winter");
      break;
    case 2:
    case 3:
    case 4:
      return ("spring");
      break;
    case 5:
    case 6:
    case 7:
      return ("summer");
      break;
    default:
      return ("autumn")
  }
};
