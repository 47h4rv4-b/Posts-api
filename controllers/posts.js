const post= require("../models/post")


exports.getPosts = (req, res) => {
    res.json({
        posts: [
            {title: "first post" },
            { title: "second post"}]
    });
};

exports.createPost = (req, res) => {
    const post = new post(req.body)
    //console.log("CREATING POST: ", req.body);
    post.save((err, result) => {
        if (err) {
            returnres.status(400).json({
                error: err
            });
        }
        res.status(200).json({
            post: result
        });  
    });
};
 