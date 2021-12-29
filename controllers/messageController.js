const fs = require("fs");
const path = require("path");
const middlewares = require("../middlewares");

module.exports = async (target, context, message, isBot) => {
  if (isBot) return;

  const player = await middlewares.verifyNewUser(context.username);
  middlewares.verifyBirthday(player, target, context.username);

  const viewerMessage = message.trim();

  if (viewerMessage.match(/^\!/)) {
    const command = viewerMessage.split(" ")[0].split("!")[1];

    fs.stat(
      path.join(__dirname, "..", "commands", `${command}.js`),
      function (err, stat) {
        if (err == null) {
          const exec = require(`../commands/${command}.js`);
          exec(target, context, message, isBot, viewerMessage);
        } else if (err.code === "ENOENT") {
        } else {
          console.log("Some other error: ", err.code);
        }
      }
    );
  }
};
