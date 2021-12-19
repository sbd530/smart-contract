const HDWalletProvider = require("truffle-hdwallet-provider");
beneficiary =
  "sorry rebel door artefact order palm drip noble grass rebel review hood";
module.exports = {
  networks: {
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          beneficiary,
          "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161" // infura-rosten endpoint
        ),
      network_id: 3,
      gas: 5000000,
      skipDryRun: false,
    },
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*", // Match any network id
    },
  },

  compilers: {
    solc: {
      version: "0.5.8",
    },
  },
};
