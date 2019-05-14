const promiseMaker = x => {
  let y = 0;
  try {
    y = x + 1;
    throw new Error('Math is hard!!'); // <- Intentional throw
  } catch (e) {
    return Promise.reject(e);
  }

  return Promise.resolve(JSON.stringify({id: y}));
};

const apiClient = args => {
  // Global Error Handler
  return promiseMaker(args).catch(err => console.error(err));
};

// Let's play a game of spot the bug.
apiClient(41)
  .then(console.log)
  .catch(err => {
    console.log('Displaying helpful API error to user...');
    console.error(err);
  })
  .then(() => {
    console.log('Doing more stuff...');
  });
