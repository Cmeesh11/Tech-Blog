const router = require('express').Router();

const rootRoutes = require('./rootRoutes.js');
const userRoutes = require('./userRoutes.js');
const postRoutes = require('./postRoutes.js');

router.use('/', rootRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes)

module.exports = router;