const { v4 } = require("uuid");
const { Player } = require("../models");

const verifyNewUser = async (username) => {
  const player = await Player.findOne({ where: { name: username } });

  if (!player) {
    await Player.create({ id: v4(), name: username });
  }

  return player;
};

module.exports = verifyNewUser;
