export const utilService = {
  padNum,
  cToF,
};

function padNum(number) {
  const strNum = number + "";
  if (strNum.length === 1) {
    return "0" + strNum;
  } else {
    return strNum;
  }
}

function cToF(fTemp) {
  var fToCel = ((fTemp - 32) * 5) / 9;
  return Math.floor(fToCel);
}
