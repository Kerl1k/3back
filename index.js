import express from "express";
import User from "./models/user.js";
import UserController from "./controller/user.controller.js";

const app = express();
const port = 3001;

app.use(express.json);
app.use("/api", UserController);

app.listen(port, () => {
  console.log(port);
});
