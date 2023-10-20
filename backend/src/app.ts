import express, { Application, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import { MONGO_URI, isEnvDev } from "./config";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`Connected to mongodb 👍🏻`);
  })
  .catch((err) => {
    console.error(err);
  });
const app: Application = express();

app.use(morgan(isEnvDev ? "dev" : "combined"));

app.get("/", (_, res: Response) => {
  return res.send("Welcome to Express & TypeScript Server");
});

export default app;
