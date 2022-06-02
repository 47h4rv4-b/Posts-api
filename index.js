const express = require('express')
const app = express()
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyparser = require("body-parser")
const expressvalidator = require('express-validator')


//bring in routes
const postroutes = require("./routes/post");

 //middleware
  app.use(morgan("dev"));
  app.use(bodyparser.json());
  app.use(expressvalidator);
  app.use("/", postroutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
