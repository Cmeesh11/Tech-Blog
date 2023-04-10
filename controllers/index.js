const router = require('express').Router();

const rootRoutes = require('./rootRoutes.js');

router.use('/', rootRoutes);

module.exports = router;