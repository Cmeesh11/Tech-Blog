const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    hooks: {
      async beforeCreate(userInstance) {
        userInstance.password = await bcrypt.hash(userInstance.password, 10);
        return userInstance;
      }
    },
    sequelize,
    modelName: 'user',
    freezeTableName: true,
    underscored: true,
    timestamps: false
  }
)
module.exports = User;