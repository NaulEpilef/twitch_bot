const verifyNewUser = require("./verifyNewUser");
const verifyBirthday = require("./verifyBirthday");

const middlewares = {
  verifyNewUser,
  verifyBirthday,
};
module.exports = middlewares;
