const userRouter = require('express').Router();


userRouter.post('/login', (req, res) => {
  
})

userRouter.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    logged_in: req.session.logged_in
  })
})

module.exports = userRouter;