const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./users.json');
const postData = require('./posts.json');
const commentData = require('./comments.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      post_id: post[Math.floor(Math.random() * 3)].id
    })
  }

  process.exit(0);
};

seedDatabase();
