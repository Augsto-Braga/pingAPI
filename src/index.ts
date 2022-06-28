import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json);

app.get("/ping", (req: Request, res: Response) => {
  return res.send("pong");
});

app.listen(port, () => {
  console.log(`Server is running in in port ${port}`);
});
