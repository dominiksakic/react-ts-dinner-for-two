import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import errorHandler from "./middleware";

dotenv.config();

const app: Express = express();
const PORT: number | string = process.env.PORT || 8080;

app.use(errorHandler);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("Welcome to Dinner for two!");
});

app.post("/login", (req: Request, res: Response) => {
  
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}!`);
});
