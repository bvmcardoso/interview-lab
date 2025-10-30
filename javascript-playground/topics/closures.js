// ---- Closures Playground ----

function makeCounter(start = 0) {
  let count = start;
  return function () {
    count += 1;
    console.log('count =', count);
  };
}

const counter1 = makeCounter();
counter1();
counter1();
counter1();

const counter2 = makeCounter(10);
counter2();
counter2();
