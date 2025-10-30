// ---- Event Loop Playground ----

console.log("start");

setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("microtask: Promise.then");
});

queueMicrotask(() => {
  console.log("microtask: queueMicrotask");
});

console.log("end");
