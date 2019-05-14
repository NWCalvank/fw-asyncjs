const func1 = (x, callback) => {
  console.log('Doing the maths...');
  const y = x + 1;
  callback(y);
};

const main = () => {
  console.log('Starting...');
  func1(41, console.log);
};

main();
