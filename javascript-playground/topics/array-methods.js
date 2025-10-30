// ---- Array Methods Playground ----

console.log('=== Array Methods Playground ===\n');

const numbers = [1, 2, 3, 4, 5];

// map()
const doubled = numbers.map((n) => n * 2);
console.log('map:', doubled);

// filter()
const evens = numbers.filter((n) => n % 2 === 0);
console.log('filter (pares):', evens);

// reduce()
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('reduce (soma):', sum);

// find()
const firstEven = numbers.find((n) => n % 2 === 0);
console.log('find (primeiro par):', firstEven);

// some() e every()
console.log(
  'some (tem par?):',
  numbers.some((n) => n % 2 === 0)
);
console.log(
  'every (todos > 0?):',
  numbers.every((n) => n > 0)
);

// forEach()
console.log('forEach:');
numbers.forEach((n, i) => console.log(`  idx ${i}:`, n));

// includes()
console.log('includes(3):', numbers.includes(3));

// findIndex()
console.log(
  'findIndex(n > 3):',
  numbers.findIndex((n) => n > 3)
);

// slice()
console.log('slice(1, 4):', numbers.slice(1, 4));

// splice()
const copy = [...numbers];
copy.splice(2, 1, 99);
console.log('splice (remove 3 e insere 99):', copy);

// flatMap()
const flatMapped = [1, 2, 3].flatMap((n) => [n, n * 2]);
console.log('flatMap:', flatMapped);

// sort()
const unsorted = [10, 1, 3, 2];
unsorted.sort((a, b) => a - b);
console.log('sort crescente:', unsorted);

// concat()
console.log('concat:', numbers.concat([6, 7, 8]));

// join()
console.log("join('-'):", numbers.join('-'));

// from() e of()
console.log("Array.from('abc'):", Array.from('abc'));
console.log('Array.of(1,2,3):', Array.of(1, 2, 3));

// flat()
console.log('flat(2):', [1, [2, [3, 4]]].flat(2));

// reduceRight()
console.log(
  'reduceRight:',
  ['a', 'b', 'c'].reduceRight((acc, c) => acc + c, '')
);

console.log('\n=== Fim ===');
