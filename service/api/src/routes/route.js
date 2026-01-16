import { Router } from "express";

const router = Router();

const PAYLOAD = {
  cpu: {
    id: "cpu",
    description: "CPU Intensive Task",
    timestamp: Date.now(),
  },
  memory: {
    id: "memory",
    description: "Memory Intensive Task",
    timestamp: Date.now(),
  },
  read_heavy: {
    id: "read_heavy",
    description: "Read Heavy Task",
    timestamp: Date.now(),
  },
};

/**
 * 1. CPU-INTENSIVE TASK
 * Simulates heavy mathematical computation (blocking)
 */
router.get("/cpu", (req, res) => {
  let result = 0;

  for (let i = 0; i < 1e9; i++) {
    result += Math.sqrt(i);
  }

  res.json({
    message: "CPU intensive task completed",
    result,
  });
});

/**
 * 2. MEMORY-INTENSIVE TASK
 * Allocates and processes a very large array
 */
router.get("/memory", (req, res) => {
  const largeArray = [];

  for (let i = 0; i < 50_000_000; i++) {
    largeArray.push(i * Math.random());
  }

  const sum = largeArray.reduce((a, b) => a + b, 0);

  res.json({
    message: "Memory intensive task completed",
    arrayLength: largeArray.length,
    sum,
  });
});

/**
 * 3. ASYNC HEAVY TASK (SIMULATED I/O)
 * Simulates slow external services or long DB calls
 */
router.get("/async", async (req, res) => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const tasks = [];

  for (let i = 0; i < 20; i++) {
    tasks.push(delay(500));
  }

  await Promise.all(tasks);

  res.json({
    message: "Async heavy task completed",
    tasksExecuted: tasks.length,
  });
});

export default router;
