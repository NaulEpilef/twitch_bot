import client from "../client";

import prisma from "../global/prisma";

import { Player } from "@prisma/client";

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
	const playerFound = (await prisma.player.findFirst({
		where: { username: context.username },
	})) as Player;
	
	if (!playerFound) {
		const newPlayer = (await prisma.player.create({
			data: { username: context.username },
		})) as Player;

		client.say(
			target,
			`Hey! @${context.username} acabou de ser cadastrado no [JOGO]!`
		);

		return;
	}

	client.say(
		target,
		`@${context.username} você já está cadastrado no jogo!`
	);
};

export { exec };