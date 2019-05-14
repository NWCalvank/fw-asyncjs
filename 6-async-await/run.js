// Our Promise-based API mocks
const get = url => Promise.resolve({id: 82});
const put = (id, name) => Promise.resolve({id, name});

// Our generator
const main = async () => {
  // Get id by url
  const result = await get('url').catch(console.error);
  console.log('result', result);

  // Use id to PUT name
  const result2 = await put(result.id, 'Nathan').catch(console.error);
  console.log('result2', result2);

  // Return Promise
  return result2;
};

// Initialization
main()
  .then(x => {
    console.log(`Completed with ${JSON.stringify(x)}`);
  })
  .catch(console.error);
