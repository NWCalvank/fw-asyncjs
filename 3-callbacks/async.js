const func1 = (x, callback) => {
  console.log('Doing the maths...');
  const y = x + 1;
  // But... what happens if this gets called more than once??
  setTimeout(() => callback(y), 4000);
};

const main = () => {
  console.log('Starting...');
  func1(41, console.log);
};

main();
