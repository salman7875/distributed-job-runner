export async function task1() {
  let result = 0;

  console.log(process.pid, "Starting CPU intensive task...", result);

  for (let i = 0; i < 1e9; i++) {
    result += Math.sqrt(i);
  }
  console.log("CPU intensive task completed.", result);
}
