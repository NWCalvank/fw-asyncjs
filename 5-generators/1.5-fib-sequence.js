// Keeps track of the previous & current
// Returns next value in sequence
const stateTracker = function*(init) {
  let prev = 0;
  let current = init;
  while (true) {
    const next = prev + current;
    prev = current;
    current = yield next;
  }
};

const fibber = function*(currentValue) {
  const iter = stateTracker(currentValue);

  while (true) {
    yield currentValue;

    const {value: nextValue} = iter.next(currentValue);
    currentValue = nextValue;
  }
};

// Initialize the fib generator
const fibRunner = fibber(1);

// Print the sequence
const fibSeqCount = 10;
for (let i = 0; i <= fibSeqCount; i++) {
  console.log(fibRunner.next().value);
}
