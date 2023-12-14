import moment from "moment";
import client from "../client";

import { verifyBirthdayMessages } from "../global/messages";

import prisma from "../global/prisma";
import { Player, Command, Prisma } from "@prisma/client";

interface Request {
  player: Player;
  target: string;
  username: string;
}

interface CommandInfo {
  date: string;
  players: [];
}

const verifyBirthday = async ({ player, target, username }: Request) => {
  if (player) {
    const messages = new verifyBirthdayMessages();
    const birthday = moment(player.birthday).format("DD/MM");
    const today = moment().format("DD/MM");

    if (birthday === today) {
      const command = (await prisma.command.findFirst({
        where: { command: "!aniversario" },
      })) as Command;

      const json = command.info as Prisma.JsonObject;
      const players = json.players as Array<string>;

      if (json.date === today) {
        if (!players.includes(username)) {
          players.push(username);
          json.players = players;
          await prisma.command.update({
            data: { info: json },
            where: { command: command.command },
          });
          client.say(target, messages.happyBirthday({ username }));
        }
      } else {
        players.splice(0, players.length);
        players.push(username);
        await prisma.command.update({
          data: { info: json },
          where: { command: command.command },
        });
      }
      prisma.$disconnect();
    }
  }
};

export default verifyBirthday;
