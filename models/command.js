("use strict");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Command extends Model {
    static associate(models) {}
  }
  Command.init(
    {
      regex: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Command",
    }
  );
  return Command;
};
