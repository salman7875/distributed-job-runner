import { redisClient, connectRedis } from "../../../shared/config/redis.js";
import { jobKeys, WORKER } from "./utils/tasks/index.js";

connectRedis()
  .then(() => {
    console.log("🚀 Worker connected to Redis, waiting for tasks...");
  })
  .catch((err) => {
    console.log(err);
  });

async function worker() {
  while (true) {
    try {
      const result = await redisClient.BLPOP(jobKeys, 0);
      await redisClient.LPUSH(`process_queue:${result.key}`, result.element);
      if (result) {
        await WORKER[result.key.split(":")[1]].task();
        await redisClient.BLPOP(`process_queue:${result.key}`);
      }
    } catch (error) {
      console.error("Worker error:", err);
      const result = await redisClient.BLPOP(jobKeys, 0);
      const taskRes = await redisClient.BLPOP(`process_queue:${result.key}`);
      if (taskRes) {
        await redisClient.LPUSH(`process_queue:${result.key}`, taskRes.element);
      }
    }
  }
}

worker();
