const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('questions', {
    question_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    question_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    question_space_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'spaces',
        key: 'space_id'
      }
    }
  }, {
    sequelize,
    tableName: 'questions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "questions_pkey",
        unique: true,
        fields: [
          { name: "question_id" },
        ]
      },
    ]
  });
};
