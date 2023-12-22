import express from "express";
import { port } from "./config.js";

const app = express();

app.get("/home", (req, res) => {
  res.status(200).send("this is the homepage");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
