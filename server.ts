// require("dotenv/config");
import "dotenv/config";
import client from "./client";

import messageArrive from "./controllers/messageController";

try {
  function joinedChat(address: string, port: number) {
    console.log(`* Bot entrou no endereço ${address}:${port}`);
  }

  client.on("message", messageArrive);
  client.on("connected", joinedChat);

  client.connect();
} catch (err) {
  console.log(err);
}
