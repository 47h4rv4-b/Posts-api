const Post= require("../models/post")


exports.getPosts = (req, res) => {
    console.log("huhijijijiji");
    const posts = Post.find({},(err,data)=>{
        if(err){
            reject(err);

        }
        else{
            res.json({posts:data})
        }

    })

    
    // .select("_id title body")
    // .then(posts => {
    //     console.log(posts);
    //     res.json({posts: posts});

    // })
    // .catch(err => console.log(err));
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post.save().then(result => {
        res.json({
            post: result
        })
    })

};

exports.deletePosts = (req, res) => {
    console.log("hdeletee");
    const posts = Post.findByIdAndRemove(req.params.id,(err) => {
        if (err) {

            console.err(err)
        } else {
            console.log(`Deleted article ${req.params.id} successfully`);
        }
    });


    

};

// exports.editPosts(){
    
// }
