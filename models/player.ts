"use strict";
import { Model, Optional } from "sequelize";

interface PlayerAttributes {
  id: string;
  name: string;
  birthday: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

interface PlayerCreationAttributes extends Optional<PlayerAttributes, "id"> {}

export default (sequelize: any, DataTypes: any) => {
  class Player extends Model<PlayerAttributes, PlayerCreationAttributes> {
    // static associate(models) {}
  }
  Player.init(
    {
      id: DataTypes.STRING,
      name: DataTypes.STRING,
      birthday: DataTypes.DATEONLY,
      createdAt: DataTypes.DATEONLY,
      updatedAt: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Player",
      tableName: "players",
    }
  );
  return Player;
};
