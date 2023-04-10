const rootRouter = require('express').Router();

// Renders homepage
rootRouter.get('/', (req, res) => {
  res.render('homepage', {
    logged_in: req.session.logged_in
  });
})

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