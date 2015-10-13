steinhaus-johnson-trotter
=========================

A JavaScript implementation of the
[Steinhaus-Johnson-Trotter algorithm with Even's speedup](https://en.wikipedia.org/wiki/Steinhaus%E2%80%93Johnson%E2%80%93Trotter_algorithm)
to generate the permutations of a string or an array.

Usage
-----

```JavaScript
var permutations = require('steinhaus-johnson-trotter');

var generate = permutations("123");

console.log(generate()); // → '132'
console.log(generate()); // → '312'
console.log(generate()); // → '321'
console.log(generate()); // → '231'
console.log(generate()); // → '213'
console.log(generate()); // → undefined
```

`permutations` returns a function which returns another
permutation each time is is invoked. If all permutations
are generated it returns `undefined`. The source is never
included in the permutations returned, i.e. the number of
invocations that the generator returns a permutation is
`N! - 1` where N is the length of the array/string.

All permutations can be generated as follows:

```JavaScript
var sjt = require('steinhaus-johnson-trotter');

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
```

The above function is also exported as `all`:

```JavaScript
var permutations = require('steinhaus-johnson-trotter');

console.log(permutations.all([ 1, 4, 7 ]));

/* → [ [ 1, 4, 7 ],
       [ 1, 7, 4 ],
       [ 7, 1, 4 ],
       [ 7, 4, 1 ],
       [ 4, 7, 1 ],
       [ 4, 1, 7 ] ] */
```
