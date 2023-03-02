const express = require("express");
const app = express();
require("dotenv").config();

const router = require("./routes/tasks");

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/", router);

app.listen(PORT, console.log(`Listening on port ${PORT} ...`));
