("use strict");
import { Model, json, Optional, DataType } from "sequelize";

interface CommandAttributes {
  command: string;
  info: typeof json;
  createdAt?: Date;
  updatedAt?: Date;
}

interface CommandCreationAttributes
  extends Optional<CommandAttributes, "command"> {}

export default (sequelize: any, DataTypes: any) => {
  class Command extends Model<CommandAttributes, CommandCreationAttributes> {
    // static associate(models) {}
  }
  Command.init(
    {
      command: { type: DataTypes.STRING, primaryKey: true },
      info: DataTypes.JSON,
      createdAt: DataTypes.DATEONLY,
      updatedAt: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Command",
      tableName: "commands",
    }
  );
  return Command;
};
