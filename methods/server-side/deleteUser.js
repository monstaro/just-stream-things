const StreamChat = require("stream-chat").StreamChat;
//Bring in environment vars
require("dotenv").config({ path: __dirname + "/.env" });

const app_key = process.env["APP_KEY"];
const secret = process.env["API_SECRET"];

//Create server instance
const serverClient = StreamChat.getInstance(app_key, secret);


//Create User
const user_id = "Josh Johnson";
const createUser = async (user_id) => {
  await serverClient.upsertUser({ id: user_id });
};
// createUser(user_id)

////////////////////////////////////////////////////////////////

//Delete User (soft delete)
const deleteUserSoft = async (user_id) => {
  await serverClient.deleteUser(user_id, {
      mark_messages_deleted: false,
  });
};
// deleteUserSoft(user_id)

////////////////////////////////////////////////////////////////

//Delete User (hard delete)
const deleteUserSoft = async (user_id) => {
    await serverClient.deleteUser(user_id, {
        mark_messages_deleted: true,
        hard_delete: true,
        //the following param is optional, removes user from 1:1 channels
        delete_conversation_channels: true
    });
  };

////////////////////////////////////////////////////////////////
// Docs reference: https://getstream.io/chat/docs/node/gdpr/?language=javascript&q=delete%20user