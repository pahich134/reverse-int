module.exports = function reverse (n) {
    let array = String(Math.abs(n));
  let result = array.split("").reverse().join("");
  return result;
}
