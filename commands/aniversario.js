const moment = require("moment");
const { Player } = require("../models");
const client = require("../server");

const { aniversario } = require("../global/regex");
const { aniversarioMessages } = require("../global/messages");

const exec = async (target, context, message, isBot, viewerMessage) => {
  const messages = new aniversarioMessages();
  if (viewerMessage.match(aniversario)) {
    const arr = viewerMessage.split(" ");
    const dateBR = arr[1];

    const isDate = moment(dateBR, "DD/MM/YYYY").isValid();

    if (isDate) {
      const date = dateBR.split("/").reverse().join("-");

      const dateBirthday = moment(date).valueOf();
      const dateToday = new Date();

      if (dateToday > dateBirthday) {
        const player = await Player.findOne({
          where: { name: context.username },
        });

        player.birthday = date;

        const resp = await player.save();

        const d = arr[1].split("/")[0];
        const m = arr[1].split("/")[1];

        client.say(target, messages.correct(context.username, d, m));
      } else {
        client.say(target, messages.fakeDate(context.username, dateBR));
      }
    } else {
      client.say(target, messages.futureDate(context.username, dateBR));
    }
  } else {
    client.say(target, messages.pattern(context.username));
  }
};

module.exports = exec;
