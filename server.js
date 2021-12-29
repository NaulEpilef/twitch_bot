const tmi = require("tmi.js");

const BOT_NICK = process.env.BOT_NICK;
const CHANNEL = [process.env.CHANNEL];
const TOKEN = process.env.TOKEN;

const opts = {
  identity: {
    username: BOT_NICK,
    password: TOKEN,
  },
  channels: CHANNEL,
};

const client = new tmi.client(opts);

module.exports = client;
