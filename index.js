const express = require('express')
const app = express()
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyparser = require("body-parser")
const expressvalidator = require('express-validator')
const dotenv= require('dotenv')
dotenv.config()
//bring in routes
const postroutes = require("./routes/post");
const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('DB connected'))

mongoose.connection.on('error', err=>{
  console.log(`DB connection error: ${err.message}`);

})
 //middleware
  app.use(morgan("dev"));
  app.use(bodyparser.json());
  // app.use(expressvalidator);
  app.use("/", postroutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
