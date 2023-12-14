import moment from "moment";
import client from "../client";

import prisma from "../global/prisma";

import { Player } from "@prisma/client";

import { aniversario } from "../global/regex";
import { aniversarioMessages } from "../global/messages";

interface execRequest {
  target: string;
  context: any;
  message: string;
  isBot: boolean;
  viewerMessage: string;
}

const exec = async ({
  target,
  context,
  message,
  isBot,
  viewerMessage,
}: execRequest) => {
  const messages = new aniversarioMessages();
  if (viewerMessage.match(aniversario)) {
    const arr = viewerMessage.split(" ");
    const dateBR = arr[1];

    const isDate = moment(dateBR, "DD/MM/YYYY").isValid();

    if (isDate) {
      const date = dateBR.split("/").reverse().join("-");

      const dateBirthday = moment(date).valueOf();
      const dateToday = moment(new Date()).valueOf();

      if (dateToday > dateBirthday) {
        const player = (await prisma.player.update({
          data: { birthday: date },
          where: { username: context.username },
        })) as Player;

        const d = arr[1].split("/")[0];
        const m = arr[1].split("/")[1];

        client.say(
          target,
          messages.correct({ username: context.username, d, m })
        );
        prisma.$disconnect();
      } else {
        client.say(
          target,
          messages.fakeDate({ username: context.username, date: dateBR })
        );
      }
    } else {
      client.say(
        target,
        messages.notDate({ username: context.username, dateBR })
      );
    }
  } else {
    client.say(target, messages.pattern({ username: context.username }));
  }
};

export { exec };
