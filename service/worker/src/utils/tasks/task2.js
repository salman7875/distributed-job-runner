export async function task2() {
  const largeArray = [];
  console.log("Starting Memory intensive task...", largeArray.length);

  for (let i = 0; i < 50_000_000; i++) {
    largeArray.push(i * Math.random());
  }

  const sum = largeArray.reduce((a, b) => a + b, 0);
  console.log("Ending Memory intensive task...", largeArray.length);
}
