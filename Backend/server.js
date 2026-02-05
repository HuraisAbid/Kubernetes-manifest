const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:6379`
});

client.connect();

app.get("/api/health", (req, res) => {
  res.json({ status: "UP" });
});

app.get("/api/visits", async (req, res) => {
  const count = await client.incr("visits");
  res.json({ visits: count });
});

app.listen(3000, () => console.log("Backend running"));

