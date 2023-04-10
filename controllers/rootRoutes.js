const rootRouter = require('express').Router();


rootRouter.get('/', (req, res) => {;
  res.render('homepage');
})

module.exports = rootRouter;