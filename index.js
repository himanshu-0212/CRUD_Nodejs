const express = require("express");
require("./db/conn");

const router = require("./routers/movieinfo");

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("Connected");
});
