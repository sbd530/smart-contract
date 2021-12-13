var MPC = artifacts.require("MPC");

module.exports = function (deployer, networks, accounts) {
  var worker = accounts[1];
  var balance = 50000000000000000000n;
  if (networks == "ropsten") {
    var worker = "0xd47fEd9f17622d64e154C3af70eE18C4920Bc9B5"; // MPC.evn 에서 copy paste
    var balance = 1000000000000000000n;
    deployer.deploy(MPC, worker, { value: balance });
  }
};
