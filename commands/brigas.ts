import client from "../server";

interface execRequest {
  target: string;
  context: any;
  message: string;
  isBot: boolean;
  viewerMessage: string;
}

const exec = ({
  target,
  context,
  message,
  isBot,
  viewerMessage,
}: execRequest) => {
  const username = context.username;
  const versus = message;
};

export default exec;
