var permutations = require('./');

var generate = permutations("123");

console.log(generate()); // → '132'
console.log(generate()); // → '312'
console.log(generate()); // → '321'
console.log(generate()); // → '231'
console.log(generate()); // → '213'
console.log(generate()); // → undefined
