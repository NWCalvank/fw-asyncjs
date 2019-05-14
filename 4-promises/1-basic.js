// Under-the-hood Promise constructor
const promiseMaker = x => {
  return new Promise((resolve, reject) => {
    let y = 0;
    try {
      y = x + 1;
    } catch (e) {
      reject(e);
    }

    resolve({id: y});
  });
};

promiseMaker(41)
  .then(console.log)
  .catch(err => console.error(err));

// Simpler (?) version
/* const promiseMaker2 = x => {
  let y = 0;
  try {
    y = x + 1;
  } catch (e) {
    return Promise.reject(e);
  }

  return Promise.resolve({id: y});
};

promiseMaker2(441)
  .then(console.log)
  .catch(err => console.error(err)); */
