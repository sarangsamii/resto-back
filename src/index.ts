import express, { Request, Response, Application } from "express";
var createError = require('http-errors');
import dotenv from "dotenv";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send({name:"Test"});
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
