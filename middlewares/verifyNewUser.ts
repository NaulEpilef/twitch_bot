import prisma from "../global/prisma";
import { Player } from "@prisma/client";

interface Request {
  username: string;
}

const verifyNewUser = async ({ username }: Request): Promise<Player> => {
  // const player = await Player.findOne({ where: { name: username } });

  // if (!player) {
  //   await Player.create({ id: v4(), name: username });
  // }

  let player = (await prisma.player.findFirst({
    where: { username },
  })) as Player;

  // if (!player) {
  //   player = (await prisma.player.create({
  //     data: { username },
  //   })) as Player;
  // }

  prisma.$disconnect();

  return player;
};

export default verifyNewUser;
