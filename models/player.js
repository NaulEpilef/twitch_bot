"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    static associate(models) {
      // define association here
    }
  }
  Player.init(
    {
      name: DataTypes.STRING,
      birthday: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Player",
    }
  );
  return Player;
};
