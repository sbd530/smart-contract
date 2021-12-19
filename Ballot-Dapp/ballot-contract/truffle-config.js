module.exports = {
  networks: {
    // 가나쉬 보고 설정
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "5777", // Any network (default: none)
      gas: 4600000,
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.8", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
