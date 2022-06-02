const express = require("express");
const postcontroller = require("../controllers/posts");

const router = express.Router();

router.get("/", postcontroller.getPosts);
router.post("/post", postcontroller.createPost);


module.exports = router;

    
  
