const router = require("express").Router();
const Post = require("../models/post")
const User = require("../models/user")

// create a post
router.post("/", async (req,res)=>{
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json( error.message);
    }
})

// update a post
router.put("/:id", async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("The Post have been updated")
        }else{
            res.status(403).json("You can update only your post");
        }
    } catch (error) {
        res.status(500).json( error.message);
    }
})


// delete a post
router.delete("/:id", async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("The Post have been deleted")
        }else{
            res.status(403).json("You can delete only your post");
        }
    } catch (error) {
        res.status(500).json( error.message);
    }
})

// like / dislike a post
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        // Check if the user has already liked the post
        if (post.likes.includes(req.body.userId)) {
            // User has already liked the post, so remove the like
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("The Post has been disliked");
        } else {
            // User has not liked the post, so add the like
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("The Post has been liked");
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
});


// get a post
router.get("/:id", async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json( error.message);
    }
})

// get timeline posts
router.get("/timeline-posts/:id", async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.friends.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        res.json(userPosts.concat(...friendPosts));
    } catch (error) {
        res.status(500).json(error.message);
    }
});


module.exports = router;