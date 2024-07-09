import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const PORT: number | string = process.env.PORT || 8080;

app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("Welcome to Dinner for two!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}!`);
});
