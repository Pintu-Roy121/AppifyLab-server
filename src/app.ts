import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(401).json({ message: "Welcome to AppifyLab" });
});

export default app;
