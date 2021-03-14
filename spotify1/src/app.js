const express = require("express");
const app = express();
const port = 3000;

const defaultRouter = require("../src/routes/default.route");
const userRouter = require("../src/routes/users.route");

app.use(express.json());
app.use(defaultRouter);
app.use(userRouter);
app.listen(port);
