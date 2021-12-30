("use strict");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Command extends Model {
    static associate(models) {}
  }
  Command.init(
    {
      command: { type: DataTypes.STRING, primaryKey: true },
      info: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Command",
      tableName: "commands",
    }
  );
  return Command;
};
