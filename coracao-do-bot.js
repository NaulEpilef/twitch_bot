require("dotenv/config");
const db = require("./db");
const client = require("./server");

const messageArrive = require("./controllers/messageController");

try {
  const result = db.sync();

  function joinedChat(address, port) {
    console.log(`* Bot entrou no endereço ${address}:${port}`);
  }

  client.on("message", messageArrive);
  client.on("connected", joinedChat);

  client.connect();
} catch (err) {
  console.log(err);
}
