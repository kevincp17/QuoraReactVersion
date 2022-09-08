var DataTypes = require("sequelize").DataTypes;
var _answers = require("./answers");
var _comments = require("./comments");
var _questions = require("./questions");
var _spaces = require("./spaces");
var _users = require("./users");

function initModels(sequelize) {
  var answers = _answers(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var questions = _questions(sequelize, DataTypes);
  var spaces = _spaces(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  comments.belongsTo(answers, { as: "comment_answer", foreignKey: "comment_answer_id"});
  answers.hasMany(comments, { as: "comments", foreignKey: "comment_answer_id"});
  answers.belongsTo(questions, { as: "question_answer", foreignKey: "question_answer_id"});
  questions.hasMany(answers, { as: "answers", foreignKey: "question_answer_id"});
  questions.belongsTo(spaces, { as: "question_space", foreignKey: "question_space_id"});
  spaces.hasMany(questions, { as: "questions", foreignKey: "question_space_id"});
  answers.belongsTo(users, { as: "answer_user", foreignKey: "answer_user_id"});
  users.hasMany(answers, { as: "answers", foreignKey: "answer_user_id"});
  comments.belongsTo(users, { as: "comment_user", foreignKey: "comment_user_id"});
  users.hasMany(comments, { as: "comments", foreignKey: "comment_user_id"});
  questions.belongsTo(users, { as: "question_user", foreignKey: "question_user_id"});
  users.hasMany(questions, { as: "questions", foreignKey: "question_user_id"});
  spaces.belongsTo(users, { as: "follower_user", foreignKey: "follower_user_id"});
  users.hasMany(spaces, { as: "spaces", foreignKey: "follower_user_id"});
  spaces.belongsTo(users, { as: "moderator_user", foreignKey: "moderator_user_id"});
  users.hasMany(spaces, { as: "moderator_user_spaces", foreignKey: "moderator_user_id"});
  spaces.belongsTo(users, { as: "space_user", foreignKey: "space_user_id"});
  users.hasMany(spaces, { as: "space_user_spaces", foreignKey: "space_user_id"});
  users.belongsTo(users, { as: "follower", foreignKey: "follower_id"});
  users.hasMany(users, { as: "users", foreignKey: "follower_id"});
  users.belongsTo(users, { as: "following", foreignKey: "following_id"});
  users.hasMany(users, { as: "following_users", foreignKey: "following_id"});

  return {
    answers,
    comments,
    questions,
    spaces,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
