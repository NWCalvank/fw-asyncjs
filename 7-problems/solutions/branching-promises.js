// return the promise
Promise.resolve('FreshWorks')
  .then(fw => {
    return Promise.resolve(fw).then(str => {
      throw new Error(str);
    });
  })
  .catch(console.error);

// await the promise(s)
Promise.resolve('FreshWorks2')
  .then(async fw => {
    await Promise.resolve(fw).then(str => {
      throw new Error(str);
    });

    await Promise.resolve(fw).then(str => {
      throw new Error(str);
    });
  })
  .catch(console.error);

// catch on the promise change (recommended ... by me)
// Catching on the chain allows the async function to safely continue
// Leaves the catch() on the async function free to handle concerns for that function
Promise.resolve('FreshWorks3')
  .then(async fw => {
    const result = await Promise.resolve(fw)
      .then(str => {
        throw new Error(str);
      })
      .catch(console.error);

    const result2 = await Promise.resolve(fw)
      .then(str => {
        throw new Error(str);
      })
      .catch(console.error);

    return Promise.resolve(fw)
      .then(str => {
        throw new Error(str);
      })
      .catch(console.error);
  })
  .catch(console.error);
