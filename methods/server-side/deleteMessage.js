const { serverClient, user_id } = require("../server-side/client");

const deleteMessage = async (messageID, hardDelete) => {
  return serverClient.deleteMessage(messageID, hardDelete);
};

deleteMessage("cc95214f-fea5-4454-8632-16a005547d59", true).then((r) =>
  console.log(r)
);

