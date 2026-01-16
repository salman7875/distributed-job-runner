import { task1 } from "./task1.js";
import { task2 } from "./task2.js";
import { task3 } from "./task3.js";

export const WORKER = {
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
