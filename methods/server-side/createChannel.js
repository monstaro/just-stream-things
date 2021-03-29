const { serverClient } = require("./client");


// Create new Channel
const createChannel = async () => {
  const newChannel = await serverClient.channel("messaging", "Fun_Chat", {
    name: "This is where we do dope things",
    created_by_id: "Mr. Jones",
  });
  await newChannel.create()
};
// createChannel()

//Notes: When you use created_by_id for a user not in the database, it creates a new user.
/////////////////////////////////////////////////


// Create conversation channel
// Leave channel id (second paramer) empty
const createConversation = async () => {
    const newChannel = await serverClient.channel('messaging', {
        members: ['codysmith', 'Cody'],
        created_by_id: 'system'
    })
    await newChannel.create()
}

// createConversation()