import express from "express";
import heavyRoutes from "./routes/route.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use("/api/heavy", heavyRoutes);

export default app;
