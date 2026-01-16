import { task1 } from "./task1.js";
import { task2 } from "./task2.js";
import { task3 } from "./task3.js";
import { WORKER } from "./task-aggregator.js";

const jobKeys = [
  "task_queue:cpu",
  "task_queue:memory",
  "task_queue:read_heavy",
];

export { task1, task2, task3, jobKeys, WORKER };
