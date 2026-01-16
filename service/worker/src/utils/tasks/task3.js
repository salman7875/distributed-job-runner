export async function task3() {
  console.log("Starting Async heavy intensive task...");
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const tasks = [];

  for (let i = 0; i < 20; i++) {
    tasks.push(delay(2000));
  }

  await Promise.all(tasks);
  console.log("Ending Async heavy intensive task...");
}
