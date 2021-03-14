const express = require("express");
const app = express();
const port = 3000;

const defaultRouter = require("../src/routes/default.route");

app.use(express.json());
app.use(defaultRouter)
app.listen(port);
