const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });
const { API_URL, PRIVATE_KEY } = process.env;

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
