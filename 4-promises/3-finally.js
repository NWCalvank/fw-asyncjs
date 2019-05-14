// What's the difference?
Promise.resolve()
  .then(() => {})
  .then(() => {});

Promise.resolve()
  .then(() => {})
  .catch(() => {});

Promise.resolve()
  .then(() => {})
  .finally(() => {});

Promise.resolve()
  .then(() => {})
  .catch(() => {})
  .then(() => {});

Promise.resolve()
  .then(() => {})
  .catch(() => {})
  .finally(() => {});

Promise.resolve()
  .then(() => {})
  .catch(() => {})
  .then(() => {})
  .finally(() => {});
