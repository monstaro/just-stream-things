const { serverClient } = require("./client");



const updateChannel = async (type, id, data) => {
    const channel = serverClient.channel(type, id, data);
    return await channel.updatePartial(data);
  };
  
  updateChannel("messaging", "Fun_Chat", {
    set: {
        isCool: false
    }
  }).then(r => console.log(r)).catch(r => console.log(r))
  