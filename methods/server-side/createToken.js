const { serverClient } = require("./client");

const createToken = (userID) => serverClient.createToken(userID);

createToken('CODY')

exports.createToken = createToken;
