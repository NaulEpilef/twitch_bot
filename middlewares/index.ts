import verifyNewUser from "./verifyNewUser";
import verifyBirthday from "./verifyBirthday";

interface Response {
  verifyBirthday: any;
  verifyNewUser: any;
}

interface test {
  username: string;
}

const middlewares = {
  verifyNewUser,
  verifyBirthday,
} as Response;

export default middlewares;
