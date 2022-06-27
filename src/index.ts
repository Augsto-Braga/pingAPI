import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/ping", (req: Request, res: Response) => {
  return res.send("pong");
});

app.listen(port, () => {
  console.log(`Server is running in in port ${port}`);
});
