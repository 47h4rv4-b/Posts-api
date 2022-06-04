const express = require('express')
const app = express()
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyparser = require("body-parser")
const expressValidator = require('express-validator')
const dotenv= require('dotenv')
dotenv.config()
//bring in routes
const postroutes = require("./routes/post");
const port = process.env.PORT;

const cors= require('cors')

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser : true,  useUnifiedTopology: true

} )
.then(()=> console.log('DB connected'))

mongoose.connection.on('error', err=>{
  console.log(`DB connection error: ${err.message}`);

})
 //middleware

  app.use(morgan("dev"));
  app.use(bodyparser.json());
  app.use(cors())
  // app.use(express.json())
  app.use(expressValidator());
  app.use("/", postroutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
