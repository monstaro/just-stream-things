const { chatClient, user_id } = require("./client");

const createChannel = async (type, id, members, name) => {
  const channel = chatClient.channel(type, id, {
    members,
    name,
  });
  await channel.create();
  await channel.sendMessage({
    text: 'hi'
  }).then(r => console.log(r.message.id))
  return
};



createChannel(
  "messaging",
  "testing-playground-03",
  ["steve"],
  "snoopys secret channel"
)

