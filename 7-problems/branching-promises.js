Promise.resolve('FreshWorks')
  .then(fw => {
    Promise.resolve(fw).then(str => {
      throw new Error(str);
    });
  })
  .catch(console.error);
