import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { UserLogin } from "./global";
import { isUserLogin } from "./util";

dotenv.config();

const app: Express = express();
const PORT: number | string = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("Welcome to Dinner for two!");
});

app.post("/login", (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body) {
      throw new Error("Request body is empty");
    }

    if (isUserLogin(req.body)) {
      const userData: UserLogin = req.body;
      console.log(userData); //for the linter, will remove later;
      res.status(200).json({ message: "Login successful" });
    } else {
      throw new Error("Invalid user login data");
    }
  } catch (error) {
    next(error);//fix this as well;
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}!`);
});
