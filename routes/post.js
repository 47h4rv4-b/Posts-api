const express = require("express");
const {getPosts, createPost, deletePosts} = require("../controllers/posts");
const validator = require("../validators");

const router = express.Router();

router.get("/post", getPosts);
router.post("/post", validator.createPostValidator, createPost);

// router.put("/put",editPosts)
router.delete("/delete/:id",deletePosts);

module.exports = router;

    
  
