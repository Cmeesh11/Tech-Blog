const userRouter = require('express').Router();

// Login for existing user
userRouter.post('/login', async (req, res) => {
  try {
  const user = await User.findOne({
    where: {
      username: req.body.username
    }
  })
  if (await user.checkPassword(req.body.password)) {
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.id = user.id;
    }) 
    res.status(200).json({ message: "Successfully logged in!" })
  }
} catch {
  res.status(404).render('login', {
    notExist: true
  })
}
})

// Brings user to dashboard if they are logged_in
userRouter.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    logged_in: req.session.logged_in
  })
})

module.exports = userRouter;