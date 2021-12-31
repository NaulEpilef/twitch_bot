import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

import moment from "moment";

async function main() {
  const json = {
    players: [],
    date: moment().format("DD/MM"),
  } as Prisma.JsonObject;

  await prisma.command.create({
    data: {
      command: "!aniversario",
      info: json,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
