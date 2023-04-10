const userRouter = require("express").Router();
const { User, Post } = require("../models");
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
    if (await user.checkPassword(req.body.password)) {
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.id = user.id;
      });
      res.status(200).json({ message: "Successfully logged in!" });
    } else {
      throw err;
    }
  } catch {
    res.status(404).render("login", {
      logged_in: req.session.logged_in,
      notExist: true,
      login: true,
    });
  }
});

userRouter.post("/signup", async (req, res) => {
  try {
    // Create new user
    const user = await User.create(req.body);
    // Storing session variables
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.id = user.id;
    });
    res.status(200).json({ message: "Account successfully created!" });
  } catch (err) {
    // If error, reload login page
    res.status(500).render("login", {
      logged_in: req.session.logged_in,
      login: true,
    });
  }
});

// Brings user to dashboard if they are logged_in
userRouter.get("/dashboard", async (req, res) => {
  try {
  const posts = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ['username']
      },
    ],
    raw: true,
  });

  res.render("dashboard", {
    posts,
    logged_in: req.session.logged_in,
  });
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = userRouter;
