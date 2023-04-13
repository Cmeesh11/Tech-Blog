const userRouter = require("express").Router()
const { User, Post, Comment } = require("../models");
const withAuth = require('../utils/auth');
// Login for existing user
userRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!user) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    if (user.checkPassword(req.body.password)) {
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.id = user.id;
      });
      res.status(200).json({ message: "Successfully logged in!" });
    } else {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
  } catch (err) {
    res.status(404).json(err);
  }
});

// Logs out user
userRouter.post("/logout", async (req, res) => {
  try {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

userRouter.post("/signup", async (req, res) => {
  try {
    // Create new user
    console.log(req.body);
    const user = await User.create(req.body);
    // Storing session variables
    req.session.save(() => {
      console.log("test");
      req.session.logged_in = true;
      req.session.id = user.id;
      console.log("test2");
    });
    res.status(200).json({ message: "Account successfully created!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Brings user to dashboard if they are logged_in
userRouter.get("/dashboard", withAuth, async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
        },
        {
          model: Comment,
        }
      ],
      raw: true,
    });

    res.render("dashboard", {
      logged_in: req.session.logged_in,
      posts,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

userRouter.post("/comment", withAuth, async (req, res) => {
  try {
    const comment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = userRouter;
