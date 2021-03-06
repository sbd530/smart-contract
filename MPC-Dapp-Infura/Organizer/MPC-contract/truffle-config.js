const HDWalletProvider = require("truffle-hdwallet-provider");
organizer =
  "sorry rebel door artefact order palm drip noble grass rebel review hood";

module.exports = {
  networks: {
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          organizer,
          "https://ropsten.infura.io/v3/e43ccc622b8c4b4aa4342d672cdcd7dc"
        ),
      network_id: 3,
      gas: 1000000,
      skipDryRun: true,
    },
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*", // Match any network id
    },
  },

  compilers: {
    solc: {
      version: "0.8.10",
    },
  },
};
