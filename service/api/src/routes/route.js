import { Router } from "express";
import { createClient } from "redis";

const router = Router();
const client = createClient();

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

router.get("/cpu", (req, res) => {
  // let result = 0;

  // for (let i = 0; i < 1e9; i++) {
  //   result += Math.sqrt(i);
  // }

  client.lpush("task_queue:cpu", JSON.stringify(PAYLOAD.cpu));

  res.json({
    message: "CPU intensive task completed",
  });
});

router.get("/memory", (req, res) => {
  // const largeArray = [];

  // for (let i = 0; i < 50_000_000; i++) {
  //   largeArray.push(i * Math.random());
  // }

  // const sum = largeArray.reduce((a, b) => a + b, 0);

  client.lpush("task_queue:memory", JSON.stringify(PAYLOAD.memory));

  res.json({
    message: "Memory intensive task completed",
  });
});

router.get("/async", async (req, res) => {
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // const tasks = [];

  // for (let i = 0; i < 20; i++) {
  //   tasks.push(delay(500));
  // }

  // await Promise.all(tasks);

  client.lpush("task_queue:read_heavy", JSON.stringify(PAYLOAD.read_heavy));

  res.json({
    message: "Async heavy task completed",
  });
});

export default router;
