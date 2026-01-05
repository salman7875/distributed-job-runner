export function task2() {
  const largeArray = [];

  for (let i = 0; i < 50_000_000; i++) {
    largeArray.push(i * Math.random());
  }

  const sum = largeArray.reduce((a, b) => a + b, 0);
}
