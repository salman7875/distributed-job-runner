import { task1 } from "./utils/task1.js";
import { task2 } from "./utils/task2.js";
import { task3 } from "./utils/task3.js";

const WORKER = {
  cpu: {
    task: task1,
  },
  memory: {
    task: task2,
  },
  read_heavy: {
    task: task3,
  },
};

while (true) {}
