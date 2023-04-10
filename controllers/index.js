const router = require('express').Router();

const rootRoutes = require('./rootRoutes.js');
const userRoutes = require('./userRoutes.js');

router.use('/', rootRoutes);
router.use('/user', userRoutes);

module.exports = router;