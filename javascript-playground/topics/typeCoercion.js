// Type coercion is Type correction. It's converted automatically or implicitly. It happens because JavaScript is dinamically typed. The variables don't have fixed types, they values do.

// Implicit conversion
console.log('4' + 1); // Converted to string (+)
console.log('4' - 1); // Converted to int (-)
console.log('4' * '2'); // Converted both to number and multiplied them.
console.log(!!'hello');

// Manual conversion
console.log(Number('34'));
console.log(String('34'));
console.log(Boolean(0));

// == x ===
// == (Loose equality) - converts the value
console.log('5' == 5); // converts '5' into 5
console.log(0 == false); // converts false to 0
console.log('' == 0); // both become 0
console.log(null == undefined); // special rule

// === (Strict equality)
console.log(3 === '3');
console.log(0 === false);
