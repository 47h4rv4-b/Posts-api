const express = require("express");
const {getPosts, createPost} = require("../controllers/posts");
const validator = require("../validators");

const router = express.Router();

router.get("/post", getPosts);
router.post("/post", validator.createPostValidator, createPost);


module.exports = router;

    
  
