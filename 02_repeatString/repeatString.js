result = "";

const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    result = string.repeat(num);
  }
  return result;
};

repeatString("hey");

// Do not edit below this line
module.exports = repeatString;
