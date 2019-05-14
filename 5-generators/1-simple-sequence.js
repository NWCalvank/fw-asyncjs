const seq = function*(x) {
  while (true) {
    yield x++;
  }
};

const iter = seq(0);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
