const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const router = require("./routes/tasks");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({ optionsSuccessStatus: 200 }));

app.use("/", router);

app.listen(PORT, console.log(`Listening on port ${PORT} ...`));
