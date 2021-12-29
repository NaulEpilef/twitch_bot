const moment = require("moment");
const client = require("../server");

const { verifyBirthdayMessages } = require("../global/messages");

const verifyBirthday = async (player, target, username) => {
  if (player) {
    const messages = new verifyBirthdayMessages();
    const birthday = moment(player.birthday).add(1, "day").format("DD/MM");
    const today = moment().format("DD/MM");

    if (birthday === today) {
      client.say(target, messages.happyBirthday(username));
    }
  }
};

module.exports = verifyBirthday;
