export const utilService = {
  padNum,
  cToF,
  changeDate,
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

function changeDate(date) {
  const newDate = new Date(date).getDay();
  const weekDay = new Array(7);
  weekDay[0] = "Sunday";
  weekDay[1] = "Monday";
  weekDay[2] = "Tuesday";
  weekDay[3] = "Wednseday";
  weekDay[4] = "Thursday";
  weekDay[5] = "Friday";
  weekDay[6] = "Saturday";

  return weekDay[newDate];
}
