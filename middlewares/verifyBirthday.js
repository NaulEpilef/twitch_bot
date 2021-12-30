const moment = require("moment");
const client = require("../server");

const { Command } = require("../models");

const { verifyBirthdayMessages } = require("../global/messages");

const verifyBirthday = async (player, target, username) => {
  if (player) {
    const messages = new verifyBirthdayMessages();
    const birthday = moment(player.birthday).add(1, "day").format("DD/MM");
    const today = moment().format("DD/MM");

    if (birthday === today) {
      const command = await Command.findOne({
        where: { command: "!aniversario" },
      });

      const json = command.info;

      if (json.date === today) {
        if (!json.users.includes(username)) {
          json.users.push(username);
          await Command.update(
            { info: json, date: today },
            { where: { command: command.command } }
          );
          client.say(target, messages.happyBirthday(username));
        }
      } else {
        json.users.remove();
        json.users.push(username);
        await Command.update(
          { info: json, date: today },
          { where: { command: command.command } }
        );
      }
    }
  }
};

module.exports = verifyBirthday;
