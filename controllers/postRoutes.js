const postRouter = require("express").Router();
const Post = require("../models/Post");

postRouter.post("/newPost", async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
    // returning postId variable to front-end
  } catch (err) {
    res.status(400).json(err);
  }
});

postRouter.put('/updatePost', async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.body.id
      }
    });
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
})

postRouter.delete('/:id', async (req, res) => {
  try {
    await Post.destroy({ 
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    res.status(404).json(err);
  }
})

module.exports = postRouter;
