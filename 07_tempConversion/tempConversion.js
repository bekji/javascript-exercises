const ftoc = function(temp) {
  const res = (temp - 32) * 5/9;
  return res === 0 ? 0 : Number(res).toFixed(1)
};

const ctof = function() {
  const res = (temp * 9/5) + 32;
  return res === 32 ? 32 : Number(res).toFixed(1)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
