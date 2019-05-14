const hello = 'hello';

const myFunction = () => {
  const hi = 'hi';
  console.log(hello);
};

myFunction();
console.log(hi); // ReferenceError: hi is not defined
