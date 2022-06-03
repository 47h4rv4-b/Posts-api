const Post= require("../models/post")


exports.getPosts = (req, res) => {
    console.log("huhijijijiji");
    const posts = Post.find()

    
    .select("_id title body")
    .then(posts => {
        console.log(posts);
        res.json({posts: posts});

    })
    .catch(err => console.log(err));
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post.save().then(result => {
        res.json({
            post: result
        })
    })

};
 