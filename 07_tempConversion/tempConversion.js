const ftoc = function(deg) {
  temp =  (( deg - 32 ) * (5/9)).toFixed(1);
  temp.toFixed;
  return parseFloat(temp);
};

const ctof = function(deg) {
  temp = (deg * (9/5) + 32).toFixed(1);
  temp.toFixed;
  return parseFloat(temp);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
