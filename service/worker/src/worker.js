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
      if (result) {
        await WORKER[result.key.split(":")[1]].task();
      }
    } catch (error) {
      console.error("Worker error:", err);
      await new Promise((res) => setTimeout(res, 1000));
    }
  }
}

worker();
