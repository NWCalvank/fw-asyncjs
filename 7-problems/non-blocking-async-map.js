const nums = [1, 2, 3, 4, 5];

const result = nums.map(async x => {
  console.log(`Starting ${x}`);
  await Promise.resolve(x).then(x => {
    console.log(`Done ${x}`);
  });
});
