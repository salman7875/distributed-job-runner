import { Router } from "express";
import { connectRedis, redisClient } from "../../../../shared/config/redis.js";

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

connectRedis()
  .then(() => {
    console.log("🚀 Worker connected to Redis, waiting for tasks...");
  })
  .catch((err) => {
    console.log(err);
  });

router.get("/cpu", (req, res) => {
  redisClient.lPush("pending_queue:cpu", JSON.stringify(PAYLOAD.cpu));
  res.json({
    message: "CPU intensive task completed",
  });
});

router.get("/memory", (req, res) => {
  redisClient.lPush("pending_queue:memory", JSON.stringify(PAYLOAD.memory));

  res.json({
    message: "Memory intensive task completed",
  });
});

router.get("/async", async (req, res) => {
  redisClient.lPush(
    "pending_queue:read_heavy",
    JSON.stringify(PAYLOAD.read_heavy)
  );

  res.json({
    message: "Async heavy task completed",
  });
});

export default router;
