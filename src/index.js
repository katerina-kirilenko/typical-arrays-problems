
exports.min = function min (array) {
  let min =
      !(Array.isArray(array) && array.length)
      ? 0
      : array.sort((a, b) => a - b)[0];
  return min;
}

exports.max = function max (array) {
  let max = !(Array.isArray(array) && array.length)
      ? 0
      : array.sort((a, b) => a - b)[array.length - 1];
  return max;
}

exports.avg = function avg (array) {
  let avg = !(Array.isArray(array) && array.length)
      ? 0
      : array.reduce((sum, current) => sum + current, 0) / array.length;
  return avg;
}
