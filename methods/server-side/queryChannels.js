const { serverClient } = require("./client");


const filter = {type: 'messaging', members: { $in: ['Cody'] }}

const query = async () => {
    return await serverClient.queryChannels({id: '!members-ND4CpQ97g_WOcT_t0jcZGrcYAX16NPUQC4eYuUo-W68'})
}

query().then(r => console.log(r))
