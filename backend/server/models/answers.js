const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('answers', {
    answer_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    view: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    upvote: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    downvote: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bookmark: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    answer_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    question_answer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'questions',
        key: 'question_id'
      }
    }
  }, {
    sequelize,
    tableName: 'answers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "answers_pkey",
        unique: true,
        fields: [
          { name: "answer_id" },
        ]
      },
    ]
  });
};
