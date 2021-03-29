const { Channel } = require("stream-chat");
const { serverClient } = require("./client");


//still working on this
//get channel to delete
const query = async () => {
    return await serverClient.queryChannels({id: 'watch-this-channel'})
}
const deleteChannel = async () => {
     const channel = await serverClient.queryChannels({id: 'watch-this-channel'})
     await channel.hide()
}

deleteChannel()
