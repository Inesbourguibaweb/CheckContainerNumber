/**
CHECK CONTAINER NUMBER 
 */

/** an object contains all letters and their values */
console.log("test2");
object = {
  A: 10,
  B: 12,
  C: 13,
  D: 14,
  E: 15,
  F: 16,
  G: 17,
  H: 18,
  I: 19,
  J: 20,
  K: 21,
  L: 23,
  M: 24,
  N: 25,
  O: 26,
  P: 27,
  Q: 28,
  R: 29,
  S: 30,
  T: 31,
  U: 32,
  V: 34,
  W: 35,
  X: 36,
  Y: 37,
  Z: 38,
};

const checkDigit = (containerNumber) => {
  sum = 0;
  array = containerNumber.split(""); // convert the container number into a string
  /** sum of letters * 2^j */
  for (let j = 0; j < 4; j++) {
    /** Convert the object into an array to make filters */
    value = Object.entries(object).filter(
      ([key, val] = entry) => key === array[j]
    );
    console.log(value);
    sum += value[0][1] * Math.pow(2, j);
  }
  /** sum of numbers * 2^j */
  for (let j = 4; j < array.length - 1; j++) {
    sum += Number(array[j]) * Math.pow(2, j);
  }
  /** calculate check digit*/
  sum - Math.trunc(sum / 11) * 11 < 10
    ? (digitCheck = sum - Math.trunc(sum / 11) * 11)
    : (digitCheck = 0);
  /**Compare the calculated check digit to the last digit in the CTR number  and return a message */
  return digitCheck == containerNumber[containerNumber.length - 1]
    ? "Correct container number"
    : "It's not a correct container number";
};

/** Test with some container numbers */
console.log("EMCU3591774", checkDigit("EMCU3591774"));
console.log("TEST1234561", checkDigit("TEST1234561"));
console.log("GHEH1987546", checkDigit("GHEH1987546"));
console.log("HLXU2008419", checkDigit("HLXU2008419"));
console.log("MSCU5285725", checkDigit("MSCU5285725"));
console.log("TLLU5146210", checkDigit("TLLU5146210"));
