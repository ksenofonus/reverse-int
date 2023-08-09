module.exports = function reverse (n) {
  const absNum = Math.abs(n);
  const absNumToString = String(absNum);
  let result = '';
  for (let i = 0; i < absNumToString.length; i = i + 1) {
    result = `${absNumToString[i]}${result}`;
  }
  return Number(result);
}
