// Using Promise.callback to limit noise
const promiseMaker = x => {
  let y = 0;
  try {
    y = x + 1;
    throw new Error('Math is hard!!'); // <- Intentional throw
  } catch (e) {
    return Promise.reject(e);
  }

  return Promise.resolve({id: y});
};

promiseMaker(41)
  .then(console.log)
  .catch(err => console.error(err))
  .then(() => {
    console.log('Doing more stuff...');
  });
