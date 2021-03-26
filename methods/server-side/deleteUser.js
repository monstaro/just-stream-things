const StreamChat = require("stream-chat").StreamChat;
//Bring in environment vars
require("dotenv").config({ path: __dirname + "/.env" });

const app_key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];

//Create server instance
const serverClient = StreamChat.getInstance(app_key, secret);

//Create User
const user_id = "Josh Johnson";
const createUser = async () => {
  await serverClient.upsertUser({ id: user_id });
};
// createUser()

//Delete User
serverClient.deleteUser("Steve");
