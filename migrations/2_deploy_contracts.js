const WhistleMessage = artifacts.require("./WhistleMessage.sol");

module.exports = function(deployer) {
  deployer.deploy(WhistleMessage);
};
