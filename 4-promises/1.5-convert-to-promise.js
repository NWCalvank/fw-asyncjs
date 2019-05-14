// Standard callback function
const func1 = (x = 0, y = 0, successCallback, errorCallback) => {
  let z = 0;
  try {
    // pretend this is dangerous
    z = x + y;
  } catch (e) {
    errorCallback(e);
  }

  successCallback(JSON.stringify({sum: z}));
};

// Promise wrapped
const func1Promise = (...args) =>
  new Promise((resolve, reject) => {
    func1(...args, resolve, reject);
  });

func1Promise(41, 1)
  .then(console.log)
  .catch(console.error);

// Pass (fn, fn) function to constructor
// const partialFunc = func1.bind(null, 41, 2);
// new Promise(partialFunc).then(console.log).catch(console.error);
