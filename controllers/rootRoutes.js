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
    logged_in: req.session.logged_in
  });
})


module.exports = rootRouter;