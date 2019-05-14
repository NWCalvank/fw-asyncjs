function add(x) {
  return function _add(y) {
    return x + y;
  };
}

const add2 = add(2); // add closes over x = 2
console.log(add2(5)); // _add retains access to x = 2
