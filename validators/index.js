exports.createPostValidator = (req, res, next) => {
    //title
    req.check("title", "write a title").notEmpty()
    req.check("title"," title must be between 4 to 10 ").isLength({
        min:4, 
        max:150});
    //body
    req.check("body", "write a body").notEmpty();
    req.check("body", "body must be between 4 to 100 ").isLength(
        {
        min:4, 
        max:2000
    });
    //check f0r errors
}
