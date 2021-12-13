'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Users'}
    },
    taskId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Tasks'}
    },
    message: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};
