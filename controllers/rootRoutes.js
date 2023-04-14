const rootRouter = require('express').Router();
const { User, Post, Comment } = require('../models');

// Renders homepage
rootRouter.get("/", async (req, res) => {
  try {
    const postsData = await Post.findAll({
      include: [
        {
          model: User,
        },
        {
          model: Comment
        }
      ],
    });
    const posts = postsData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      logged_in: req.session.logged_in,
      posts,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

// Renders login page
rootRouter.get('/login', (req, res) => {
  res.render('login', {
    logged_in: req.session.logged_in,
    login: true
  });
})

rootRouter.get('/signup', (req, res) => {
  res.render('login', {
    logged_in: req.session.logged_in,
    signup: true
  })
})

rootRouter.get('/emptyLogin', (req, res) => {
  res.render('login', {
    logged_in: req.session.logged_in,
    login: true,
    notEnough: true
  })
})

rootRouter.get('/emptySignup', (req, res) => {
  res.render('login', {
    logged_in: req.session.logged_in,
    signup: true,
    notEnough: true
  })
})

rootRouter.get('/notExist', (req, res) => {
  res.render('login', {
    logged_in: req.session.logged_in,
    login: true,
    notExist: true
  })
})

module.exports = rootRouter;