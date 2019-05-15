(() => {
  console.log('Start');
  setTimeout(() => console.log('Hello'), 0);
  Promise.resolve('World').then(console.log);
  console.log('End');
})();
