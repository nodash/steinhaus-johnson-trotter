var sjt = require('./');

function permutations(arr) {
  var generator = sjt(arr);
  var next = arr;
  var result = [];
  while (next !== undefined) {
    result.push(next);
    next = generator();
  }
  return result;
}

console.log(permutations('123'));
