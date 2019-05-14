// Our Promise-based API mocks
const get = url =>
  new Promise((resolve, reject) => {
    resolve({id: 82});
  });
const put = (id, name) =>
  new Promise((resolve, reject) => {
    resolve({id, name});
  });

// Toy example of a generator runner
const generatorRunner = genFunction => {
  const gen = genFunction();

  const _runner = x => {
    const result = gen.next(x);

    return result.done
      ? // Return value if generator is done running
        result.value
      : // Or return a resolved promise with a recursive callback to the runner
        // This essentially extends the Promise chain
        Promise.resolve(result.value).then(_runner);
  };

  return _runner();
};

// Our generator
const main = function*() {
  // Get id by url
  const result = yield get('url').catch(console.error);
  console.log('result', result);

  // Use id to PUT name
  const result2 = yield put(result.id, 'Nathan').catch(console.error);
  console.log('result2', result2);

  return result2;
};

// Initialization
generatorRunner(main)
  .then(x => {
    console.log(`Completed with ${JSON.stringify(x)}`);
  })
  .catch(console.error);
