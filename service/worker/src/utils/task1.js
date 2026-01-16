export function task1() {
  let result = 0;

  for (let i = 0; i < 1e9; i++) {
    result += Math.sqrt(i);
  }
}
