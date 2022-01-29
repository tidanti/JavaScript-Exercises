const ftoc = function(tempInF) {
  let tempInC = (tempInF - 32) * 5 / 9;
  tempInC = +tempInC.toFixed(1);

  return tempInC;
};

const ctof = function(tempInC) {
  let tempInF = tempInC * 9 / 5 + 32;
  tempInF = +tempInF.toFixed(1);

  return tempInF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
