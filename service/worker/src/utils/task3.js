export async function task3() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const tasks = [];

  for (let i = 0; i < 20; i++) {
    tasks.push(delay(500));
  }

  await Promise.all(tasks);
}
