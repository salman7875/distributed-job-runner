import { createClient } from "redis";

export const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST || "redis-stack",
    port: Number(process.env.REDIS_PORT) || 6379,
  },
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));

export async function connectRedis(params) {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
}
